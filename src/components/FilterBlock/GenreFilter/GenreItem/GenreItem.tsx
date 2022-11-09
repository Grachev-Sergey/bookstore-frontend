import { GenreItemContainer } from './GenreItem.styles';
import checkboxActive from '../../../../assets/icons/checkboxActive.png';
import checkbox from '../../../../assets/icons/checkbox.png';

type PropsType = {
  genre: string;
  genresList: string;
  addSelectedGenres: (genre: string) => void;
};

const GenreItem: React.FC<PropsType> = ({ genre, genresList, addSelectedGenres }) => {
  const activeCheckbox = genresList?.includes(genre);

  const checkboxClickHandler = () => {
    addSelectedGenres(genre);
  };

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
