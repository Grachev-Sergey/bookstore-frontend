import { useState } from 'react';
import { FilterContainer } from './Filter.styles';
import forwardDown from '../../../assets/icons/ForwardDown.png';
import forwardRight from '../../../assets/icons/ForwardRight.png';
import GenreFilter from '../GenreFilter/GenreFilter';
import PriceFilter from '../PriceFilter';
import Sort from '../Sort';

type PropsType = {
  title: string;
  onClick?: () => void;
} & React.PropsWithChildren;

const Filter: React.FC<PropsType> = (props) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const toggleVisibility = () => {
    setModalVisibility(!modalVisibility);
  };

  return (
    <FilterContainer>
      <div className="filterButton" onClick={toggleVisibility}>
        <p>{props.title}</p>
        <img className="forward" src={modalVisibility ? forwardDown : forwardRight} alt="modal window activity indicator" />
      </div>
      {props.title === 'Genere' && modalVisibility ? <GenreFilter /> : null}
      {props.title === 'Price' && modalVisibility ? <PriceFilter /> : null}
      {props.title === 'Sort by ' && modalVisibility ? <Sort /> : null}
    </FilterContainer>
  );
};

export default Filter;
