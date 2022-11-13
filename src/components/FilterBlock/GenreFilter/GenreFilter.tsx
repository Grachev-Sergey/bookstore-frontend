/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { GenreFilterContainer } from './GenreFilter.styles';

import genesApi from '../../../api/genesApi';

import GenreItem from './GenreItem';

import type { GenreType } from '../../../utils/types/filterTypes';

import polygon from '../../../assets/icons/Polygon.png';
import Loading from '../../Loading/Loading';

const GenreFilter: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [genres, setGenres] = useState<GenreType[]>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedGenres, setSelectedGenres] = useState(searchParams.get('genres') || '');
  const genreArr = selectedGenres.split(',');

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

  useEffect(() => {
    setSelectedGenres(searchParams.get('genres') || '');
  }, [searchParams]);

  const addSelectedGenres = (genre: string) => {
    let genreList = '';
    if (selectedGenres.includes(genre)) {
      genreArr.splice(genreArr.indexOf(genre), 1);
      genreList = genreArr.join();
    } else {
      genreList = `${selectedGenres},${genre}`;
    }
    searchParams.set('genres', genreList);
    if (genreList === '') {
      searchParams.delete('genres');
    }
    setSearchParams(searchParams);
  };

  if (!isLoaded) {
    return <Loading />;
  }

  return (
    <GenreFilterContainer>
      <img className="polygon" src={polygon} />
      {
        genres?.map((item) => (
          <GenreItem
            genresList={selectedGenres}
            addSelectedGenres={addSelectedGenres}
            key={item.id}
            genre={item.name}
          />
        ))
      }
    </GenreFilterContainer>
  );
};

export default GenreFilter;
