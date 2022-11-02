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
  const [selectSorting, setSelectSorting] = useState('Price');
  const sortClickHandler = (value: string) => {
    setSelectSorting(value);
  };

  const toggleVisibility = () => {
    setModalVisibility(!modalVisibility);
  };

  return (
    <FilterContainer>
      <div className="filterButton" onClick={toggleVisibility}>
        <p className="title">
          {
            props.title === 'Sort by'
              ? `${props.title} ${selectSorting.toLowerCase()}`
              : props.title
          }
        </p>
        <img className="forward" src={modalVisibility ? forwardDown : forwardRight} alt="modal window activity indicator" />
      </div>
      {props.title === 'Genere' && modalVisibility ? <GenreFilter /> : null}
      {props.title === 'Price' && modalVisibility ? <PriceFilter /> : null}
      {props.title === 'Sort by' && modalVisibility ? <Sort sortClickHandler={sortClickHandler} /> : null}
    </FilterContainer>
  );
};

export default Filter;
