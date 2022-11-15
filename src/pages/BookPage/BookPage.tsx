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

import Button from '../../components/Button';
import RatingElem from '../../components/Rating';
import AuthorizeBanner from '../../components/AuthorizeBanner';

import type { BookType } from '../../utils/types/bookTypes';
import type { ChangeRatingType } from '../../utils/types/ratingType';
import type { FavoriteType } from '../../utils/types/favoriteType';

import removeFavorites from '../../assets/icons/removeFavorites.png';
import addFavorites from '../../assets/icons/addFavorites.png';
import backArrow from '../../assets/icons/backArrow.png';
import Loading from '../../components/Loading';

const BookPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.user.user);
  const [isLoaded, setIsLoaded] = useState(false);
  const [book, setBook] = useState<BookType | null>(null);
  const [isInFavorites, setIsInFavorites] = useState(userInfo?.favorite?.includes(Number(id)));

  useEffect(() => {
    (async () => {
      try {
        const getOneBook = await bookApi.getBook(Number(id));
        setBook(getOneBook.data);
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
      }
    } catch (err) {
      const error = err as Error;
      return toast.error(error.message);
    }
  };

  const toggleFavoritButton = async () => {
    try {
      const favoriteInfo: FavoriteType = {
        bookId: Number(id),
        userId: Number(userInfo?.id),
      };
      if (!userInfo?.email) {
        navigate('/signup');
      } else if (!isInFavorites) {
        await favoritesApi.addToFavorites(favoriteInfo);
        await dispatch(userThunks.checkUser());
        setIsInFavorites(true);
      } else if (isInFavorites) {
        await favoritesApi.removeFromFavorites(favoriteInfo);
        await dispatch(userThunks.checkUser());
        setIsInFavorites(false);
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
          {/* <p className="book-info__rating">Rating</p> */}
          <div className="book-info__rating">
            <Rating
              iconsCount={1}
              emptyColor="#BFCC94"
              allowHover={false}
              size={30}
            />
            <span className="rating__text">{(book?.rating || 0).toFixed(1)}</span>
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
          <div className="description">
            <p className="description__title">Description</p>
            <p className="description__text">{book?.description}</p>
          </div>
          <div className="add-to-cart">
            <div className="cover-selection">
              <p className="cover-selection__title">Paperback</p>
              <Button
                className={book?.paperback ? 'add-to-cart__button' : 'add-to-cart__button add-to-cart__button--gray'}
              >
                {book?.paperback
                  ? `$ ${book?.paperbackPrice} USD`
                  : 'Not available'
                }
              </Button>
            </div>
            <div className="cover-selection cover-selection--hardcover">
              <p className="cover-selection__title">Hardcover</p>
              <Button
                className={book?.hardCover ? 'add-to-cart__button' : 'add-to-cart__button add-to-cart__button--gray'}
              >
                {book?.hardCover
                  ? `$ ${book?.hardCoverPrice} USD`
                  : 'Not available'
                }
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="comments">
        <h2 className="comments__title">Comments</h2>
      </div>
      {!userInfo?.email && <AuthorizeBanner />}
      <div className="recommendations">
        <h2 className="recommendations__title">Recommendations</h2>
      </div>
    </BookPageContainer>
  );
};

export default BookPage;
