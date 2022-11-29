/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { GenreFilterContainer } from './GenreFilter.styles';

import type { GenreType } from '../../../utils/types/filterTypes';

import GenreItem from './GenreItem';

import polygon from '../../../assets/icons/Polygon.png';

type PropsType = {
  genres?: GenreType[];
};

const GenreFilter: React.FC<PropsType> = ({ genres }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedGenres, setSelectedGenres] = useState(searchParams.get('genres') || '');
  const genreArr = selectedGenres.split(',');

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
    if (!genreList) {
      searchParams.delete('genres');
    }
    setSearchParams(searchParams);
  };

  return (
    <GenreFilterContainer>
      <img className="polygon" src={polygon} />
      {
        genres?.map((item) => (
          <GenreItem
            addSelectedGenres={addSelectedGenres}
            key={item.id}
            genre={item.name}
            isChecked={genreArr.includes(item.name)}
          />
        ))
      }
    </GenreFilterContainer>
  );
};

export default GenreFilter;
