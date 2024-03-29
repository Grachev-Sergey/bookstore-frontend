import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { BookPageContainer } from './BookPage.styles';

import AuthorizeBanner from '../../components/AuthorizeBanner';
import Loading from '../../components/Loading';
import Comments from '../../components/Comments';
import Recommendations from '../../components/Recommendations';
import BookCover from './BookCover';
import BookInfo from './BookInfo';
import BookDescription from './BookDescription';

import bookApi from '../../api/bookApi';
import { useAppSelector } from '../../store/hooks';
import type { BookType } from '../../utils/types/bookTypes';

const BookPage: React.FC = () => {
  const { id } = useParams();
  const userInfo = useAppSelector((state) => state.user.user);
  const [isLoaded, setIsLoaded] = useState(false);
  const [book, setBook] = useState<BookType | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const getOneBook = await bookApi.getBook(Number(id));
        setBook(getOneBook.data.book);
      } catch (err) {
        const error = err as Error;
        return toast.error(error.message);
      } finally {
        setIsLoaded(true);
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeRating = (newRating: number) => {
    setBook((prev) => {
      if (!prev) return null;
      return ({ ...prev, rating: newRating });
    });
  };

  if (!isLoaded) {
    return <Loading />;
  }

  return (
    <BookPageContainer>
      <div className="book-block">
        <BookCover userInfo={userInfo} book={book} id={id} />
        <div className="book-info-wrapper">
          <BookInfo
            userInfo={userInfo}
            book={book}
            id={id}
            setNewRating={changeRating}
          />
          <BookDescription userInfo={userInfo} book={book} id={id} />
        </div>
      </div>
      <div className="comments">
        <h2 className="comments__title">Comments</h2>
        <Comments comments={book?.comments} userInfo={userInfo} bookId={id} />
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
