import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import { toast } from 'react-toastify';
import bookApi from '../../api/bookApi';
import Button from '../../components/Button/Button';
import RatingElem from '../../components/Rating/Rating';
import { useAppSelector } from '../../store/hooks';
import AuthorizeBanner from '../../components/AuthorizeBanner';
import { BookPageContainer } from './BookPage.styles';
import addFavoritesActive from '../../assets/icons/addFavoritesActive.png';
import addFavorites from '../../assets/icons/addFavorites.png';
import backArrow from '../../assets/icons/backArrow.png';
import type { BookType } from '../../utils/types/bookTypes';

const BookPage: React.FC = () => {
  const userInfo = useAppSelector((state) => state.user.user?.email);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isActiveButton, setIsActiveButton] = useState(false);
  const toggleFavoritButton = () => {
    setIsActiveButton(!isActiveButton);
  };
  const [book, setBook] = useState<BookType | null>(null);
  const bookId = useParams();
  useEffect(() => {
    (async () => {
      try {
        const getOneBook = await bookApi.getBook(Number(bookId.id));
        setBook(getOneBook.data);
      } catch (err) {
        const error = err as Error;
        return toast.error(error.message);
      } finally {
        setIsLoaded(true);
      }
    })();
  }, [bookId]);

  if (!isLoaded) {
    <>Loading...</>;
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
            src={isActiveButton ? addFavoritesActive : addFavorites}
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
            <span className="rating__text">{book?.rating || 0}</span>
            <RatingElem />
            <div className="rate-this-book">
              <img className="rate-this-book__img" src={backArrow} alt="pointer to rating" />
              <span className="rate-this-book__text">Rate this book</span>
            </div>
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
      {!userInfo && <AuthorizeBanner />}
      <div className="recommendations">
        <h2 className="recommendations__title">Recommendations</h2>
      </div>
    </BookPageContainer>
  );
};

export default BookPage;
