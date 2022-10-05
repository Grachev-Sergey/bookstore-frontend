import Button from '../Button/Button';
import { BannerContainer } from './Banner.styles';
import woman from '../../assets/images/woman.png';

function Banner() {
  return (
    <BannerContainer>
      <div className="bannerInfo">
        <h2>Build your library with us</h2>
        <p>Buy two books and get one for free</p>
        <div className = "banner_button">
          <Button>Choose a book</Button>
        </div>
      </div>
      <img src={woman} alt="woman reading" />
    </BannerContainer>
  );
}

export default Banner;
