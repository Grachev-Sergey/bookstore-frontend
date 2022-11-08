import { useState, useRef, useEffect } from 'react';
import { FilterContainer } from './Filter.styles';
import forwardDown from '../../../assets/icons/ForwardDown.png';
import forwardRight from '../../../assets/icons/ForwardRight.png';
import GenreFilter from '../GenreFilter/GenreFilter';
import PriceFilter from '../PriceFilter';
import Sort from '../Sort';

type PropsType = {
  title: string;
  addSelectGenres?: (genre: string) => void;
  selectedGenres?: string[];
};

const Filter: React.FC<PropsType> = ({ title, addSelectGenres, selectedGenres }) => {
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
            title === 'Sort by'
              ? `${title} ${selectSorting.toLowerCase()}`
              : title
          }
        </p>
        <img className="forward" src={modalVisibility ? forwardDown : forwardRight} alt="modal window activity indicator" />
      </div>
      {title === 'Genre' &&
        modalVisibility &&
        (<GenreFilter
          addSelectGenres={addSelectGenres}
          selectedGenres={selectedGenres}
        />)
      }
      {title === 'Price' && modalVisibility && <PriceFilter />}
      {title === 'Sort by' && modalVisibility && <Sort sortClickHandler={sortClickHandler} />}
    </FilterContainer>
  );
};

export default Filter;
