import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { FavoritesPageContainer } from './FavoritesPage.styles';

import EmptyPage from '../EmptyPage';
import BookItem from '../../components/BookItem';

import { useAppSelector } from '../../store/hooks';
import favoritesApi from '../../api/favoritesApi';
import type { FavoriteBooksType } from '../../utils/types/favoriteType';

const FavoritesPage: React.FC = () => {
  const userId = useAppSelector((state) => state.user.user?.id);
  const favorite = useAppSelector((state) => state.user.user?.favorite);
  const [favoritBooks, setFavoritBooks] = useState<FavoriteBooksType[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const favorits = await favoritesApi.getFavorites(Number(userId));
        setFavoritBooks(favorits.data);
      } catch (err) {
        const error = err as Error;
        return toast.error(error.message);
      }
    })();
  }, [userId, favorite]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {!favorite?.length
        ? <EmptyPage type="favorites" />
        : (<FavoritesPageContainer>
          {
            favoritBooks.map((item) => (
              <BookItem key={item.id} book={item.book} />
            ))
          }
           </FavoritesPageContainer>
        )}
    </>
  );
};

export default FavoritesPage;
