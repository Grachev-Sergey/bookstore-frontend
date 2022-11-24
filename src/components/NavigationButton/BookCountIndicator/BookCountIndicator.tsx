import { BookCountIndicatorContainer } from './BookCountIndicator.styled';

import type { BooksInCartType } from '../../../utils/types/userTypes';

type PropsType = {
  counter?: BooksInCartType[] | number[];

};

const BookCountIndicator: React.FC<PropsType> = ({ counter }) => {
  return (
    <BookCountIndicatorContainer>
      {counter?.length}
    </BookCountIndicatorContainer>
  );
};

export default BookCountIndicator;
