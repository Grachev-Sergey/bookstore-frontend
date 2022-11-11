import { Rating } from 'react-simple-star-rating';
import { RatingContainer } from './Rating.styles';

const RatingElem: React.FC = () => {
  return (
    <RatingContainer>
      <Rating
        fillColor="#BFCC94"
        allowFraction
        transition
        emptyColor="#fff"
      />
    </RatingContainer>
  );
};

export default RatingElem;
