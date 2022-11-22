/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import { toast } from 'react-toastify';

import { BookPageContainer } from './BookPage.styles';

import bookApi from '../../api/bookApi';
import ratingApi from '../../api/ratingApi';
import favoritesApi from '../../api/favoritesApi';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import userThunks from '../../store/userSlice/userThunks';
import cover from '../../utils/config';

import Button from '../../components/Button';
import RatingElem from '../../components/Rating';
import AuthorizeBanner from '../../components/AuthorizeBanner';
import Loading from '../../components/Loading';
import Comments from '../../components/Comments';
import Recommendations from '../../components/Recommendations';

import type { BookType } from '../../utils/types/bookTypes';
import type { ChangeRatingType } from '../../utils/types/ratingType';
import type { FavoriteType } from '../../utils/types/favoriteType';
import type { CommentType } from '../../utils/types/commentsType';
import type { AddToCartInfoType } from '../../utils/types/cartTypes';

import {
  setClassNameForAddToCartButton,
  setValueForAddToCartButton,
  disableButton,
} from '../../utils/addToCartButtonInfo';

import removeFavorites from '../../assets/icons/removeFavorites.png';
import addFavorites from '../../assets/icons/addFavorites.png';
import backArrow from '../../assets/icons/backArrow.png';
import cartApi from '../../api/cartApi';

const BookPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.user.user);
  const [isLoaded, setIsLoaded] = useState(false);
  const [book, setBook] = useState<BookType | null>(null);
  const [comments, setComments] = useState<CommentType[] | null>(null);
  const [isInFavorites, setIsInFavorites] = useState(userInfo?.favorite?.includes(Number(id)));

  useEffect(() => {
    (async () => {
      try {
        const getOneBook = await bookApi.getBook(Number(id));
        setBook(getOneBook.data.book);
        setComments(getOneBook.data.comments);
      } catch (err) {
        const error = err as Error;
        return toast.error(error.message);
      } finally {
        setIsLoaded(true);
      }
    })();
  }, [id]);

  const changeRating = async (rate: number) => {
    try {
      if (!userInfo?.email) {
        navigate('/signup');
      } else {
        const ratingInfo: ChangeRatingType = {
          bookId: Number(id),
          userId: Number(userInfo?.id),
          rating: rate,
        };
        const newRating = await ratingApi.change(ratingInfo);
        setBook((prev) => {
          if (!prev) return null;
          return ({ ...prev, rating: newRating.data.rating });
        });
        await dispatch(userThunks.checkUser());
      }
    } catch (err) {
      const error = err as Error;
      return toast.error(error.message);
    }
  };

  const toggleFavoritButton = async () => {
    try {
      if (!userInfo?.email) {
        navigate('/signup');
      } else {
        const favoriteInfo: FavoriteType = {
          bookId: Number(id),
          userId: Number(userInfo?.id),
        };
        if (!isInFavorites) {
          await favoritesApi.addToFavorites(favoriteInfo);
          await dispatch(userThunks.checkUser());
          setIsInFavorites(true);
        } else {
          await favoritesApi.removeFromFavorites(favoriteInfo);
          await dispatch(userThunks.checkUser());
          setIsInFavorites(false);
        }
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
      } else {
        const addToCartInfo: AddToCartInfoType = {
          bookId: Number(id),
          userId: Number(userInfo?.id),
          cover,
          price,
        };
        await cartApi.addToCart(addToCartInfo);
        await dispatch(userThunks.checkUser());
      }
    } catch (err) {
      const error = err as Error;
      return toast.error(error.message);
    }
  };

  if (!isLoaded) {
    return <Loading />;
  }

  return (
    <BookPageContainer>
      <div className="book-block">
        <div className="cover">
          <img className="picture" src={`${book?.cover}`} />
          <img
            className="favorite-button"
            alt="add favorter button"
            onClick={toggleFavoritButton}
            src={isInFavorites ? removeFavorites : addFavorites}
          />
        </div>
        <div className="book-info">
          <h2 className="book-info__title">{book?.title}</h2>
          <p className="book-info__author">{book?.author}</p>
          <div className="book-info__rating">
            <div className="rating__container">
              <Rating
                iconsCount={1}
                emptyColor="#BFCC94"
                allowHover={false}
              />
              <span className="rating__text">{(book?.rating || 0).toFixed(1)}</span>
            </div>
            <div className="rating__container groop-stars">
              <RatingElem
                initialValue={book?.rating || 0}
                readOnly={false}
                onClick={(rate) => changeRating(rate)}
              />
              {!userInfo?.rating?.includes(Number(id)) &&
                (<div className="rate-this-book">
                  <img className="rate-this-book__img" src={backArrow} alt="pointer to rating" />
                  <span className="rate-this-book__text">Rate this book</span>
                 </div>)}
            </div>
          </div>
        </div>
        <div className="description-and-add-to-cart">
          <div className="description">
            <p className="description__title">Description</p>
            <p className="description__text">{book?.description}</p>
          </div>
          <div className="add-to-cart">
            <div className="cover-selection">
              <p className="cover-selection__title">Paperback</p>
              <Button
                // eslint-disable-next-line no-nested-ternary
                className={setClassNameForAddToCartButton(book, userInfo, 'paperBack')}
                isDisabled={disableButton(book, userInfo, 'paperBack')}
                onClick={() => addToCartHandler(cover.paperBack, Number(book?.paperbackPrice))}
              >
                {setValueForAddToCartButton(book, userInfo, 'paperBack')}
              </Button>
            </div>
            <div className="cover-selection cover-selection--hardcover">
              <p className="cover-selection__title">Hardcover</p>
              <Button
                className={setClassNameForAddToCartButton(book, userInfo, 'hardCover')}
                isDisabled={disableButton(book, userInfo, 'hardCover')}
                onClick={() => addToCartHandler(cover.hardCover, Number(book?.hardCoverPrice))}
              >
                {setValueForAddToCartButton(book, userInfo, 'hardCover')}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="comments">
        <h2 className="comments__title">Comments</h2>
        <Comments comments={comments} userInfo={userInfo} bookId={id} />
      </div>
      {!userInfo?.email && <AuthorizeBanner />}
      <div className="recommendations">
        <h2 className="recommendations__title">Recommendations</h2>
        <Recommendations />
      </div>
    </BookPageContainer>
  );
};

export default BookPage;
