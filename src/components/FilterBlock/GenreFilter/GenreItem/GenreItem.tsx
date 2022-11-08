// import { useState } from 'react';
import { GenreItemContainer } from './GenreItem.styles';
import checkboxActive from '../../../../assets/icons/checkboxActive.png';
import checkbox from '../../../../assets/icons/checkbox.png';

type PropsType = {
  genre: string;
  addSelectGenres?: (genre: string) => void;
  selectedGenres?: string[];
};

const GenreItem: React.FC<PropsType> = ({ genre, addSelectGenres, selectedGenres }) => {
  const checkboxClickHandler = () => {
    if (addSelectGenres) {
      addSelectGenres(genre);
    }
  };

  const activeCheckbox = selectedGenres?.includes(genre);

  return (
    <GenreItemContainer onClick={checkboxClickHandler}>
      <img
        className="checkbox"
        src={activeCheckbox ? checkboxActive : checkbox}
        alt="filter selection"
      />
      <p className="genre">{genre}</p>
    </GenreItemContainer>
  );
};

export default GenreItem;
