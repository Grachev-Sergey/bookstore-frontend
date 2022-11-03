import { useState, useRef, useEffect } from 'react';
import { FilterContainer } from './Filter.styles';
import forwardDown from '../../../assets/icons/ForwardDown.png';
import forwardRight from '../../../assets/icons/ForwardRight.png';
import GenreFilter from '../GenreFilter/GenreFilter';
import PriceFilter from '../PriceFilter';
import Sort from '../Sort';

type PropsType = {
  title: string;
};

const Filter: React.FC<PropsType> = (props) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [selectSorting, setSelectSorting] = useState('Price');
  const modalWindowRef = useRef<HTMLDivElement>(null);

  const sortClickHandler = (value: string) => {
    setSelectSorting(value);
  };

  const toggleVisibility = () => {
    setModalVisibility(!modalVisibility);
  };

  const handleClick = (e: MouseEvent): void => {
    if (modalWindowRef.current && !modalWindowRef.current?.contains(e.target as Node)) {
      setModalVisibility(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <FilterContainer ref={modalWindowRef}>
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
      {props.title === 'Genre' && modalVisibility && <GenreFilter />}
      {props.title === 'Price' && modalVisibility && <PriceFilter />}
      {props.title === 'Sort by' && modalVisibility && <Sort sortClickHandler={sortClickHandler} />}
    </FilterContainer>
  );
};

export default Filter;
