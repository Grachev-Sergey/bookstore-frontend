import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PaginationContainer } from './Pagination.styles';
import previousPage from '../../assets/icons/previousPage.png';
import circle from '../../assets/icons/circle.png';
import ring from '../../assets/icons/ring.png';
import nextPage from '../../assets/icons/nextPage.png';

type PropsType = {
  counter: number;
};

const Pagination: React.FC<PropsType> = ({ counter }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get('page') || 1));
  const maxPages = counter / 2;

  // useEffect(() => {
  //   setPage(Number(searchParams.get('page') || ''));
  // }, [searchParams]);

  const previousPageClickHandler = () => {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
    searchParams.set('page', `${page}`);
    setSearchParams(searchParams);
    // eslint-disable-next-line no-console
    console.log('click left', page);
  };

  const nextPageClickHandler = () => {
    if (page === maxPages) {
      return;
    }
    setPage(page + 1);
    searchParams.set('page', `${page}`);
    setSearchParams(searchParams);
    // eslint-disable-next-line no-console
    console.log('click right', page);
  };

  return (
    <PaginationContainer>
      <img
        className="previous-page__button page-button"
        src={previousPage}
        alt="button to go to the previous page"
        onClick={previousPageClickHandler}
      />
      <div className="indicator-block">
        <img
          className="indicator"
          src={page === 1 ? circle : ring}
          alt="first page indicator"
        />
        <img
          className="indicator"
          src={(page > 1 && page < maxPages) ? circle : ring}
          alt="current page indicator"
        />
        <img
          className="indicator"
          src={page === maxPages ? circle : ring}
          alt="last page indicator"
        />
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
