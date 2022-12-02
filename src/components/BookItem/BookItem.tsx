/* eslint-disable no-nested-ternary */
import { useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import classNames from 'classnames';

import { BookContainer } from './BookItem.styles';

import Button from '../Button';
import RatingElem from '../Rating';

import favoritesApi from '../../api/favoritesApi';
import cartApi from '../../api/cartApi';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  addToFavorites,
  removeFromFavorites,
  addToCart,
} from '../../store/userSlice';
import type { BookType } from '../../utils/types/bookTypes';
import type { FavoriteType } from '../../utils/types/favoriteType';
import cover from '../../utils/config';

import removeFavorites from '../../assets/icons/removeFavorites.png';
import addFavorites from '../../assets/icons/addFavorites.png';

type PropsType = {
  book: BookType;
};

const BookItem: React.FC<PropsType> = ({ book }) => {
  const id = book.id;
  const userInfo = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isInFavorites = useMemo(() => {
    if (!id) return false;
    return userInfo?.favorite?.map((item) => item.bookId).includes(+id);
  }, [userInfo?.favorite, id]);

  const toggleFavoritButton = async () => {
    try {
      if (!userInfo?.email) {
        return navigate('/signup');
      }
      const favoriteInfo: FavoriteType = {
        bookId: Number(id),
        userId: Number(userInfo?.id),
      };
      if (!isInFavorites) {
        const newFavoriteItem = await favoritesApi.addToFavorites(favoriteInfo);
        dispatch(addToFavorites(newFavoriteItem.data));
      } else {
        const removedFavoriteId = await favoritesApi.removeFromFavorites(favoriteInfo);
        dispatch(removeFromFavorites(removedFavoriteId.data));
      }
    } catch (err) {
      const error = err as Error;
      return toast.error(error.message);
    }
  };

  const addToCartHandler = async (cover: string, price: number) => {
    try {
      if (!userInfo?.email) {
        navigate('/signup');
      }
      const newCartItem = await cartApi.addToCart({
        bookId: Number(id),
        cover,
        price,
        userId: Number(userInfo?.id),
      });
      dispatch(addToCart(newCartItem.data));
    } catch (err) {
      const error = err as Error;
      return toast.error(error.message);
    }
  };

  const booksInCartId = userInfo?.cart?.map((item) => item.bookId);
  const isInCart = booksInCartId?.includes(Number(book.id));

  const bntClass = classNames({
    'add-to-cart__button': true,
    'add-to-cart__button--gray': !book?.hardCover,
    'add-to-cart__button--added': isInCart,
  });

  const getBtnContent = () => {
    if (!book.hardCover) {
      return 'Not available';
    }
    if (isInCart) {
      return 'Added to cart';
    }
    return `$ ${book?.hardCoverPrice} USD`;
  };

  const isDisabled = () => {
    if (!book?.hardCover) {
      return true;
    }
    if (isInCart) {
      return true;
    }
    return false;
  };

  return (
    <BookContainer>
      <div className="book__cover">
        <img
          className="favorite-button"
          alt="add favorter button"
          onClick={toggleFavoritButton}
          src={isInFavorites ? removeFavorites : addFavorites}
        />
        <Link to={`/book/${book.id}`}>
          <img className="book-cover" src={`${book.cover}`} alt="book cover" />
        </Link>
        {book.status &&
          <div className={`book__status book__status--${book.status}`}>{book.status}</div>
        }
      </div>
      <p className="book__title">{book.title}</p>
      <p className="book__author">{book.author}</p>
      <div className="rating">
        <RatingElem initialValue={book.rating || 0} readOnly />
        <span className="rating__text">{(book.rating || 0).toFixed(1)}</span>
      </div>
      <Button
        className={bntClass}
        isDisabled={isDisabled()}
        onClick={() => addToCartHandler(cover.hardCover, Number(book?.hardCoverPrice))}
      >
        {getBtnContent()}
      </Button>
    </BookContainer>
  );
};

export default BookItem;
