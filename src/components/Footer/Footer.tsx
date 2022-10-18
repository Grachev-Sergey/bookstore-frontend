import { Link } from 'react-router-dom';
import { FooterContainer, StyledFooter } from './Footer.styles';
import logo from '../../assets/images/logoBlackBg.png';
import map from '../../assets/images/map.png';

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <div className = "contacts">
          <img src = {logo} alt = "bookstore logo" />
          <p className = "email">tranthuy.nute@gmail.com</p>
          <p className = "phone">(480) 555-0103</p>
        </div>
        <div className = "links">
          <Link to="/" className="link">Home Page</Link>
          <Link to="/" className="link">Catalog</Link>
          <Link to="/user/profile" className="link">My Account</Link>
          <Link to="/user/cart" className="link">Cart</Link>
        </div>
        <div className="address">
          <p>6391 Elgin St. Celina, Delaware 10299</p>
          <img src={map} alt="map" />
        </div>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
