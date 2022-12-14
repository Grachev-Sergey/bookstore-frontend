import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { CatalogContainer } from './Catalog.styles';

import BookItem from '../BookItem';
import FilterBlock from '../FilterBlock';
import Pagination from '../Pagination';
import Loading from '../Loading';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import bookThunks from '../../store/bookSlice/bookThunks';

const Catalog: React.FC = () => {
  const books = useAppSelector((state) => state.books);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const genre = searchParams.get('genres') || '';
    const minPrice = Number(searchParams.get('minPrice') || '5');
    const maxPrice = Number(searchParams.get('maxPrice') || '25');
    const sorting = (searchParams.get('sorting') || 'Price').toLowerCase();
    const page = (Number(searchParams.get('page') || 1));
    const search = searchParams.get('search') || '';
    dispatch(bookThunks.getAllFiltredBooks({
      genre,
      minPrice,
      maxPrice,
      sorting,
      page,
      search,
    }));
    setIsLoaded(true);
  }, [dispatch, searchParams]);

  if (!isLoaded) {
    return (
      <Loading />
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
      <Pagination />
    </CatalogContainer>
  );
};

export default Catalog;
