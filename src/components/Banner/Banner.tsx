import Button from '../Button/Button';
import { BannerContainer } from './Banner.styles';

function Banner() {
  return (
    <BannerContainer>
      <div className="banner__info">
        <h2>Build your library with us</h2>
        <p>Buy two books and get one for free</p>
        <div className = "banner__button">
          <Button>Choose a book</Button>
        </div>
      </div>
      <div className="img" />
    </BannerContainer>
  );
}

export default Banner;
