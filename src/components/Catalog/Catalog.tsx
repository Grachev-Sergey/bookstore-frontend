import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { CatalogContainer } from './Catalog.styles';
import bookThunks from '../../store/bookSlice/bookThunks';
import BookElem from '../BookElem';

const Catalog: React.FC = () => {
  const books = useAppSelector((state) => state.books);
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        await dispatch(bookThunks.getAllBooks());
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      } finally {
        setIsLoaded(true);
      }
    })();
  }, [dispatch]);

  if (!isLoaded) {
    return (
      <>loading</>
    );
  }

  return (
    <CatalogContainer>
      <div className="header">
        <h2>Catalog</h2>
        <div>filters</div>
      </div>
      <div className="booksContainer">
        {
          books.books.map((item) => (
            <BookElem key={item.id} book={item} />
          ))
        }
      </div>
      <div className="pagination">pagination</div>
    </CatalogContainer>
  );
};

export default Catalog;
