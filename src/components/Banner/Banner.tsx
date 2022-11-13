import { BannerContainer } from './Banner.styles';

import Button from '../Button/Button';

const Banner: React.FC = () => {
  return (
    <BannerContainer>
      <div className="banner__info">
        <h2>Build your library with us</h2>
        <p>Buy two books and get one for free</p>
        <Button className = "banner__button">Choose a book</Button>
      </div>
      <div className="img" />
    </BannerContainer>
  );
};

export default Banner;
