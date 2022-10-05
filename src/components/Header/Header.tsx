import { HeaderContainer } from './Header.styles';
import logo from '../../assets/images/logo.png';
import search from '../../assets/icons/search.png';
import Button from '../Button/Button';
import NavigationButton from '../NavigationButton';

function Header() {
  const isLogin = true;

  return (
    <HeaderContainer>
      <img
      className = "logo"
      src = {logo}
      alt = "bookstore logo"
      />
      <p>Catalog</p>
      <div className = "search">
      <img
        className="magnifier"
        src={search}
        alt = "search icon"
        />
        <input placeholder = "Search" />
      </div>
      <div className = "menu">
      {!isLogin
        ? <Button>Log In/ Sing Up</Button>
        : <NavigationButton />
      }
      </div>
    </HeaderContainer>
  );
}

export default Header;
