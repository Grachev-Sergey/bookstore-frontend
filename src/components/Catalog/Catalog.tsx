import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
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
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const genreLine = selectedGenres.join(',');
  // eslint-disable-next-line no-console
  console.log(genreLine);

  const query = {
    genre: genreLine,
  };

  useEffect(() => {
    (async () => {
      const queryGenres = searchParams.get('genre') || '';

      // eslint-disable-next-line no-console
      console.log(queryGenres);

      setSearchParams(query);
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    (async () => {
      try {
        await dispatch(bookThunks.getAllFiltredBooks(genreLine));
      } catch (err) {
        const error = err as Error;
        return toast.error(error.message);
      } finally {
        setIsLoaded(true);
      }
    })();
  }, [dispatch, genreLine]);

  const addSelectGenres = (genre: string) => {
    if (!selectedGenres.includes(genre)) {
      setSelectedGenres([...selectedGenres, genre]);
    } else {
      const removedItem = selectedGenres.indexOf(genre);
      selectedGenres.splice(removedItem, 1);
      setSelectedGenres([...selectedGenres]);
    }
  };

  if (!isLoaded) {
    return (
      <>loading</>
    );
  }

  return (
    <CatalogContainer>
      <div className="header">
        <h2>Catalog</h2>
        <FilterBlock
          addSelectGenres={addSelectGenres}
          selectedGenres={selectedGenres}
        />
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
