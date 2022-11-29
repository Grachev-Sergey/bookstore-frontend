import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { BookContainer } from './BookItem.styles';

import favoritesApi from '../../api/favoritesApi';
import cartApi from '../../api/cartApi';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import userThunks from '../../store/userSlice/userThunks';
import cover from '../../utils/config';
import {
  setClassNameForAddToCartButton,
  getButtonName,
  disableButton,
} from '../../utils/addToCartButtonInfo';

import Button from '../Button';
import RatingElem from '../Rating';

import type { BookType } from '../../utils/types/bookTypes';
import type { FavoriteType } from '../../utils/types/favoriteType';

import removeFavorites from '../../assets/icons/removeFavorites.png';
import addFavorites from '../../assets/icons/addFavorites.png';

type PropsType = {
  book: BookType;
};

const BookItem: React.FC<PropsType> = ({ book }) => {
  const id = book.id;
  const userInfo = useAppSelector((state) => state.user.user);
  const favoritsId = userInfo?.favorite?.map((item) => item.bookId);
  const dispatch = useAppDispatch();
  const [isInFavorites, setIsInFavorites] = useState(favoritsId?.includes(Number(id)));
  const navigate = useNavigate();

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
        await favoritesApi.addToFavorites(favoriteInfo);
        await dispatch(userThunks.checkUser());
        return setIsInFavorites(true);
      }
      await favoritesApi.removeFromFavorites(favoriteInfo);
      await dispatch(userThunks.checkUser());
      setIsInFavorites(false);
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
      if (userInfo) {
        await cartApi.addToCart({
          bookId: Number(id),
          cover,
          price,
          userId: Number(userInfo.id),
        });
        await dispatch(userThunks.checkUser());
      }
    } catch (err) {
      const error = err as Error;
      return toast.error(error.message);
    }
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
        className={setClassNameForAddToCartButton(book, userInfo, 'hardCover')}
        isDisabled={disableButton(book, userInfo, 'hardCover')}
        onClick={() => addToCartHandler(cover.hardCover, Number(book?.hardCoverPrice))}
      >
        {getButtonName(book, userInfo, 'hardCover')}
      </Button>
    </BookContainer>
  );
};

export default BookItem;
