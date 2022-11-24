import { BookCountIndicatorContainer } from './BookCountIndicator.styled';

import type { UserCartType } from '../../../utils/types/cartTypes';
import type { UserFavoriteType } from '../../../utils/types/favoriteType';

type PropsType = {
  counter?: UserCartType[] | UserFavoriteType[];

};

const BookCountIndicator: React.FC<PropsType> = ({ counter }) => {
  return (
    <BookCountIndicatorContainer>
      {counter?.length}
    </BookCountIndicatorContainer>
  );
};

export default BookCountIndicator;
