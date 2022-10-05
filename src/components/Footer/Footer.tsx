import { FooterContainer, StyledFooter } from './Footer.styles';
import logo from '../../assets/images/logoBlackBg.png';
import map from '../../assets/images/map.png';

function Footer() {
  return (
    <StyledFooter>
      <FooterContainer>
        <div className = "contacts">
          <img src = {logo} alt = "bookstore logo" />
          <p className = "email">tranthuy.nute@gmail.com</p>
          <p className = "phone">(480) 555-0103</p>
        </div>
        <div className = "links">
          <a href="#">Home Page</a>
          <a href="#">Catalog</a>
          <a href="#">My Account</a>
          <a href="#">Cart</a>
        </div>
        <div className="address">
          <p>6391 Elgin St. Celina, Delaware 10299</p>
          <img src={map} alt="map" />
        </div>
      </FooterContainer>
    </StyledFooter>
  );
}

export default Footer;
