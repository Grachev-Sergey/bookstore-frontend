import { useState } from 'react';
import { GenreItemContainer } from './GenreItem.styles';
import checkboxActive from '../../../../assets/icons/checkboxActive.png';
import checkbox from '../../../../assets/icons/checkbox.png';

type PropsType = {
  genre: string;
};

const GenreItem: React.FC<PropsType> = (props) => {
  const [activeCheckbox, setActiveChekbox] = useState(false);

  const checkboxClickHandler = () => {
    setActiveChekbox(!activeCheckbox);
  };

  return (
    <GenreItemContainer onClick={checkboxClickHandler}>
      <img className="checkbox" src={activeCheckbox ? checkboxActive : checkbox} alt="filter selection" />
      <p className="genre">{props.genre}</p>
    </GenreItemContainer>
  );
};

export default GenreItem;
