import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { BookCoverContainer } from './BookCover.styles';

import favoritesApi from '../../../api/favoritesApi';
import { useAppDispatch } from '../../../store/hooks';
import { addToFavorites, removeFromFavorites } from '../../../store/userSlice';
import type { FavoriteType } from '../../../utils/types/favoriteType';
import type { UserType } from '../../../utils/types/userTypes';
import type { BookType } from '../../../utils/types/bookTypes';

import removeFavorites from '../../../assets/icons/removeFavorites.png';
import addFavorites from '../../../assets/icons/addFavorites.png';

type PropsType = {
  userInfo: UserType | null;
  book: BookType | null;
  id?: string;
};

const BookCover: React.FC<PropsType> = ({ userInfo, book, id }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const favoritsId = userInfo?.favorite?.map((item) => item.bookId);
  const [isInFavorites, setIsInFavorites] = useState(favoritsId?.includes(Number(id)));

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
        setIsInFavorites(true);
      } else {
        const removedFavoriteId = await favoritesApi.removeFromFavorites(favoriteInfo);
        dispatch(removeFromFavorites(removedFavoriteId.data));
        setIsInFavorites(false);
      }
    } catch (err) {
      const error = err as Error;
      return toast.error(error.message);
    }
  };

  return (
    <BookCoverContainer>
      <img className="picture" src={`${book?.cover}`} />
      <img
        className="favorite-button"
        alt="add favorter button"
        onClick={toggleFavoritButton}
        src={isInFavorites ? removeFavorites : addFavorites}
      />
    </BookCoverContainer>
  );
};

export default BookCover;
