import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { CatalogContainer } from './Catalog.styles';
import bookThunks from '../../store/bookSlice/bookThunks';
import BookItem from '../BookItem';
import FilterBlock from '../FilterBlock';

const Catalog: React.FC = () => {
  const books = useAppSelector((state) => state.books);
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        await dispatch(bookThunks.getAllBooks());
      } catch (err) {
        const error = err as Error;
        return toast.error(error.message);
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
        <FilterBlock />
      </div>
      <div className="booksContainer">
        {
          books.books.map((item) => (
            <BookItem key={item.id} book={item} />
          ))
        }
      </div>
      <div className="pagination">pagination</div>
    </CatalogContainer>
  );
};

export default Catalog;
