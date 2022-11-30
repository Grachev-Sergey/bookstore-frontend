import { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { BookInfoContainer } from './BookInfo.styles';

import RatingElem from '../../../components/Rating';

import ratingApi from '../../../api/ratingApi';
import { useAppDispatch } from '../../../store/hooks';
import userThunks from '../../../store/userSlice/userThunks';
import type { UserType } from '../../../utils/types/userTypes';
import type { BookType } from '../../../utils/types/bookTypes';

import backArrow from '../../../assets/icons/backArrow.png';

type PropsType = {
  userInfo: UserType | null;
  book: BookType | null;
  id?: string;
  setNewRating: (newRating: number) => void;
};

const BookInfo:React.FC<PropsType> = ({ userInfo, book, id, setNewRating }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const ratingId = userInfo?.rating?.map((item) => item.bookId);
  const [isRated, setIsRated] = useState(ratingId?.includes(Number(id)));

  const changeRating = async (rate: number) => {
    try {
      if (!userInfo?.email) {
        return navigate('/signup');
      }
      const newRating = await ratingApi.change({
        bookId: Number(id),
        userId: Number(userInfo?.id),
        rating: rate,
      });
      setNewRating(newRating.data.rating);
      await dispatch(userThunks.checkUser());
      setIsRated(true);
    } catch (err) {
      const error = err as Error;
      return toast.error(error.message);
    }
  };

  return (
    <BookInfoContainer>
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
          {!isRated &&
            (<div className="rate-this-book">
              <img className="rate-this-book__img" src={backArrow} alt="pointer to rating" />
              <span className="rate-this-book__text">Rate this book</span>
             </div>)}
        </div>
      </div>
    </BookInfoContainer>
  );
};

export default BookInfo;
