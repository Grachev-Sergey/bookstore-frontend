import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import bookApi from '../../api/bookApi';
import Button from '../../components/Button/Button';
import { useAppSelector } from '../../store/hooks';
import AuthorizeBanner from '../../components/AuthorizeBanner/AuthorizeBanner';
import type { BookType } from '../../utils/types/bookTypes';
import { BookPageContainer } from './BookPage.styles';

const BookPage: React.FC = () => {
  const userInfo = useAppSelector((state) => state.user.user?.email);
  const [isLoaded, setIsLoaded] = useState(false);
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
      <div className="book-info">
        <div className="book-info__cover">
          <img src={`${book?.cover}`} />
        </div>
        <p className="book-info__title">{book?.title}</p>
        <p className="book-info__author">{book?.author}</p>
        <p className="book-info__rating">Rating</p>
        <div className="description">
          <p className="description__title">Description</p>
          <p className="description__text">{book?.description}</p>
        </div>
        <div className="addToCart">
          <div className="addToCart__coverSelection">
            <p className="addToCart__coverSelection-title">Paperback</p>
            <Button
              className={!book?.paperback ? 'addToCartButton' : 'addToCartButton--gray'}
            >
              {!book?.paperback
                ? `$ ${book?.paperbackPrice} USD`
                : 'Not available'
              }
            </Button>
          </div>
          <div className="addToCart__coverSelection">
            <p className="addToCart__coverSelection-title">Hardcover</p>
            <Button className="addToCartButton">
              {book?.hardCover
                ? `$ ${book?.hardCoverPrice} USD`
                : 'Not available'
              }
            </Button>
          </div>
        </div>
        <div>Comments</div>
        {!userInfo && <AuthorizeBanner />}
        <div>Recommendations</div>
      </div>
    </BookPageContainer>
  );
};

export default BookPage;
