import { useState } from 'react';
import DropDownButton from './DropDownButton';
import { FilerBlockContainer } from './FilterBlock.styles';
import GenreFilter from './GenreFilter';
import PriceFilter from './PriceFilter';
import Sort from './Sort';

const FilterBlock: React.FC = () => {
  const [selectSorting, setSelectSorting] = useState('Price');

  const sortClickHandler = (value: string) => {
    setSelectSorting(value);
  };
  return (
    <FilerBlockContainer>
      <DropDownButton filterType="Genre">
        <GenreFilter />
      </DropDownButton>
      <DropDownButton filterType="Price">
        <PriceFilter />
      </DropDownButton>
      <DropDownButton filterType="Sort by" selectSorting={selectSorting}>
        <Sort sortClickHandler={sortClickHandler} />
      </DropDownButton>
    </FilerBlockContainer>
  );
};

export default FilterBlock;
