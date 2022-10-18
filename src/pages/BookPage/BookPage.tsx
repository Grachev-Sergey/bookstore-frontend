// import { useEffect, useState } from 'react';
// import bookThunks from '../../store/bookSlice/bookThunks';
// import { useAppDispatch } from '../../store/hooks';
import { BookPageContainer } from './BookPage.styles';

const BookPage: React.FC = () => {
  // const dispatch = useAppDispatch();
  // const [isLoaded, setIsLoaded] = useState(false);
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       await dispatch(bookThunks.getBook());
  //     } catch (error) {
  //       // eslint-disable-next-line no-console
  //       console.log(error);
  //     } finally {
  //       setIsLoaded(true);
  //     }
  //   })();
  // }, [dispatch]);

  return (
    <BookPageContainer>
      <p>book page</p>
    </BookPageContainer>
  );
};

export default BookPage;
