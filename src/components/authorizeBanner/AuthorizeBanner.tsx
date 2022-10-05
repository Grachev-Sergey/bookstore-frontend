import { AuthorizeBannerContainer } from './AuthorizeBanner.styles';
import Button from '../Button';
import castle from '../../assets/images/castle.png';

function AuthorizeBanner() {
  return (
    <AuthorizeBannerContainer>
      <div className="banner__info">
        <h2>Authorize now</h2>
        <p>Authorize now and discover the fabulous world of books</p>
        <div className = "banner__button">
          <Button>Log In/ Sing Up</Button>
        </div>
      </div>
      <img src = {castle} alt = "castle" />
    </AuthorizeBannerContainer>
  );
}

export default AuthorizeBanner;
