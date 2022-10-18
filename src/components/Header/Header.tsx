import { Link } from 'react-router-dom';
import { HeaderContainer } from './Header.styles';
import logo from '../../assets/images/logo.png';
import search from '../../assets/icons/search.png';
import Button from '../Button/Button';
import NavigationButton from '../NavigationButton';
import { useAppSelector } from '../../store/hooks';

const Header: React.FC = () => {
  const userInfo = useAppSelector((state) => state.user.user?.email);

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
          ? (
            <Link to="/signup">
              <Button className="navigation__button">Log In/ Sing Up</Button>
            </Link>
          )
          : <NavigationButton />
        }
      </div>
    </HeaderContainer>
  );
};

export default Header;
