import { GenreItemContainer } from './GenreItem.styles';

import checkboxActive from '../../../../assets/icons/checkboxActive.png';
import checkbox from '../../../../assets/icons/checkbox.png';

type PropsType = {
  genre: string;
  addSelectedGenres: (genre: string) => void;
  isChecked: boolean;
};

const GenreItem: React.FC<PropsType> = ({ genre, isChecked, addSelectedGenres }) => {
  const checkboxClickHandler = () => {
    addSelectedGenres(genre);
  };

  return (
    <GenreItemContainer onClick={checkboxClickHandler}>
      <img
        className="checkbox"
        src={isChecked ? checkboxActive : checkbox}
        alt="filter selection"
      />
      <p className="genre">{genre}</p>
    </GenreItemContainer>
  );
};

export default GenreItem;
