import { Rating } from 'react-simple-star-rating';

import { RatingContainer } from './Rating.styles';

type PropsType = {
  initialValue: number;
  readOnly: boolean;
  onClick?: (rate: number) => void;
};

const RatingElem: React.FC<PropsType> = ({ initialValue, readOnly, onClick }) => {
  return (
    <RatingContainer>
      <Rating
        fillColor="#BFCC94"
        allowFraction
        transition
        emptyColor="#fff"
        initialValue={initialValue}
        readonly={readOnly}
        onClick={onClick}
      />
    </RatingContainer>
  );
};

export default RatingElem;
