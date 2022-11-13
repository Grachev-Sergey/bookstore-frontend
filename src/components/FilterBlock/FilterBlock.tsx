import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { FilerBlockContainer } from './FilterBlock.styles';

import DropDownButton from './DropDownButton';
import GenreFilter from './GenreFilter';
import PriceFilter from './PriceFilter';
import Sort from './Sort';

const FilterBlock: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectSorting, setSelectSorting] = useState(searchParams.get('sorting') || 'Price');

  const sortClickHandler = (value: string) => {
    setSelectSorting(value);
    searchParams.set('sorting', value);
    setSearchParams(searchParams);
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
