import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { GenreFilterContainer } from './GenreFilter.styles';
import GenreItem from './GenreItem/GenreItem';
import polygon from '../../../assets/icons/Polygon.png';
import genesApi from '../../../api/genesApi';
import type { GenreType } from '../../../utils/types/filterTypes';

type PropsType = {
  addSelectGenres?: (genre: string) => void;
  selectedGenres?: string[];
};

const GenreFilter: React.FC<PropsType> = ({ addSelectGenres, selectedGenres }) => {
  const [genres, setGenres] = useState<GenreType[]>();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const allGenres = await genesApi.getGenres();
        setGenres(allGenres.data.genres);
      } catch (err) {
        const error = err as Error;
        return toast.error(error.message);
      } finally {
        setIsLoaded(true);
      }
    })();
  }, []);

  if (!isLoaded) {
    return <p>loading...</p>;
  }

  return (
    <GenreFilterContainer>
      <img className="polygon" src={polygon} />
      {
        genres?.map((item) => (
          <GenreItem
          key={item.id}
          genre={item.name}
          addSelectGenres={addSelectGenres}
          selectedGenres={selectedGenres}
        />
        ))
      }
    </GenreFilterContainer>
  );
};

export default GenreFilter;
