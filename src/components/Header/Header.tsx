import { Link, useNavigate } from 'react-router-dom';
import { HeaderContainer } from './Header.styles';
import logo from '../../assets/images/logo.png';
import search from '../../assets/icons/search.png';
import Button from '../Button/Button';
import NavigationButton from '../NavigationButton';
import { useAppSelector } from '../../store/hooks';

function Header() {
  const userInfo = useAppSelector((state) => state.user.email);

  const navigate = useNavigate();

  const goToAuth = () => {
    navigate('/signup');
  };

  return (
    <HeaderContainer>
      <Link to="/">
        <img
          className="logo"
          src={logo}
          alt="bookstore logo"
        />
      </Link>
      <Link to="/" className="link">Catalog</Link>
      <div className="search">
        <img
          className="magnifier"
          src={search}
          alt="search icon"
        />
        <input placeholder="Search" />
      </div>
      <div className="menu">
        {!userInfo
          ? <Button className="navigation__button" onClick={goToAuth}>Log In/ Sing Up</Button>
          : <NavigationButton />
        }
      </div>
    </HeaderContainer>
  );
}

export default Header;
