import { Link } from 'react-router-dom';

import { FooterContainer, StyledFooter } from './Footer.styles';

import logo from '../../assets/images/logoBlackBg.png';
import map from '../../assets/images/map.png';

const logoutHandler = () => {
  localStorage.clear();
  window.location.reload();
};

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
          <button className="logout-button" onClick={logoutHandler}>Logout</button>
          <Link to="/">Home Page</Link>
          <Link to="/">Catalog</Link>
          <Link to="/user/profile">My Account</Link>
          <Link to="/user/cart">Cart</Link>
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
