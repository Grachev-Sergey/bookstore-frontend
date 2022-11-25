import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { PaginationContainer } from './Pagination.styles';

import { useAppSelector } from '../../store/hooks';

import previousPage from '../../assets/icons/previousPage.png';
import nextPage from '../../assets/icons/nextPage.png';

const Pagination: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get('page') || 1));
  const counter = useAppSelector((state) => state.books.counter);
  const numberPerPage = useAppSelector((state) => state.books.numberPerPage);
  const userId = useAppSelector((state) => state.user.user?.id);
  const maxPages = Math.ceil(counter / numberPerPage);

  useEffect(() => {
    searchParams.set('page', `${page}`);
    setSearchParams(searchParams);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const previousPageClickHandler = () => {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
  };

  const nextPageClickHandler = () => {
    if (page === maxPages) {
      return;
    }
    setPage(page + 1);
  };

  return (
    <PaginationContainer userId={Boolean(userId)}>
      <img
        className="previous-page__button page-button"
        src={previousPage}
        alt="button to go to the previous page"
        onClick={previousPageClickHandler}
      />
      <div className="indicator-block">
        <div className={page === 1 ? 'indicator indicator--selected' : 'indicator'} />
        <div className={(page > 1 && page < maxPages) ? 'indicator indicator--selected' : 'indicator'} />
        <div className={page === maxPages ? 'indicator indicator--selected' : 'indicator'} />
      </div>
      <img
        className="next-page__button page-button"
        src={nextPage} alt="button to go to the next page"
        onClick={nextPageClickHandler}
      />
    </PaginationContainer>
  );
};

export default Pagination;
