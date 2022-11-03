import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { GenreFilterContainer } from './GenreFilter.styles';
import GenreItem from './GenreItem/GenreItem';
import polygon from '../../../assets/icons/Polygon.png';
import genesApi from '../../../api/genesApi';
import type { GenreType } from '../../../utils/types/filterTypes';

const GenreFilter: React.FC = () => {
  const [genres, setGenres] = useState<GenreType[]>();
  useEffect(() => {
    (async () => {
      try {
        const allGenres = await genesApi.getGenres();
        setGenres(allGenres.data);
      } catch (err) {
        const error = err as Error;
        return toast.error(error.message);
      }
    })();
  }, []);

  return (
    <GenreFilterContainer>
      <img className="polygon" src={polygon} />
      {
        genres?.map((item) => (
          <GenreItem key={item.id} genre={item.title} />
        ))
      }
    </GenreFilterContainer>
  );
};

export default GenreFilter;
