import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { FilerBlockContainer } from './FilterBlock.styles';

import DropDownButton from './DropDownButton';
import GenreFilter from './GenreFilter';
import PriceFilter from './PriceFilter';
import Sort from './Sort';
import Loading from '../Loading';

import genesApi from '../../api/genesApi';
import type { GenreType } from '../../utils/types/filterTypes';

const FilterBlock: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectSorting, setSelectSorting] = useState(searchParams.get('sorting') || 'Price');
  const [genres, setGenres] = useState<GenreType[]>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const allGenres = await genesApi.getGenres();
        setGenres(allGenres.data.genres);
      } catch (err) {
        const error = err as Error;
        return toast.error(error.message);
      } finally {
        setIsLoaded(true);
      }
    })();
  }, []);

  const sortClickHandler = (value: string) => {
    setSelectSorting(value);
    searchParams.set('sorting', value);
    setSearchParams(searchParams);
  };

  if (!isLoaded) {
    return <Loading />;
  }

  return (
    <FilerBlockContainer>
      <DropDownButton filterType="Genre">
        <GenreFilter genres={genres} />
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
