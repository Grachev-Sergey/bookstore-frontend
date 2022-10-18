import { Link } from 'react-router-dom';
import { AuthorizeBannerContainer } from './AuthorizeBanner.styles';
import Button from '../Button';
import castle from '../../assets/images/castle.png';

const AuthorizeBanner: React.FC = () => {
  return (
    <AuthorizeBannerContainer>
      <div className="banner__info">
        <h2>Authorize now</h2>
        <p>Authorize now and discover the fabulous world of books</p>
        <Link to="/signup">
          <Button className="banner__button">Log In/ Sing Up</Button>
        </Link>
      </div>
      <img src={castle} alt="castle" />
    </AuthorizeBannerContainer>
  );
};

export default AuthorizeBanner;
