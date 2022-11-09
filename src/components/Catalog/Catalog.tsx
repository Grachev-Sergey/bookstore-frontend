import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
// import { toast } from 'react-toastify';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { CatalogContainer } from './Catalog.styles';
import bookThunks from '../../store/bookSlice/bookThunks';
import BookItem from '../BookItem';
import FilterBlock from '../FilterBlock';
import type { QueryType } from '../../utils/types/queryTypes';

const Catalog: React.FC = () => {
  const books = useAppSelector((state) => state.books);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const genre = searchParams.get('genres') || '';
    const minPrice = searchParams.get('minPrice') || '5';
    const maxPrice = searchParams.get('maxPrice') || '25';
    const query: QueryType = {
      genre,
      minPrice,
      maxPrice,
    };
    dispatch(bookThunks.getAllFiltredBooks(query));
    setIsLoaded(true);
  }, [dispatch, searchParams]);

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
      <div className="books-container">
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
