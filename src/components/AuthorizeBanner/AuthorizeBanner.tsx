import { useNavigate } from 'react-router-dom';
import { AuthorizeBannerContainer } from './AuthorizeBanner.styles';
import Button from '../Button';
import castle from '../../assets/images/castle.png';

function AuthorizeBanner() {
  const navigate = useNavigate();

  const goToAuth = () => {
    navigate('/signup');
  };

  return (
    <AuthorizeBannerContainer>
      <div className="banner__info">
        <h2>Authorize now</h2>
        <p>Authorize now and discover the fabulous world of books</p>
        <Button className="banner__button" onClick={goToAuth}>Log In/ Sing Up</Button>
      </div>
      <img src={castle} alt="castle" />
    </AuthorizeBannerContainer>
  );
}

export default AuthorizeBanner;
