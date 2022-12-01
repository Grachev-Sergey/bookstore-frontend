import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { HeaderContainer } from './Header.styles';

import Button from '../Button';
import NavigationButton from '../NavigationButton';
import Input from '../Input';

import { useAppSelector } from '../../store/hooks';

import logo from '../../assets/images/logo.png';
import search from '../../assets/icons/search.png';

const Header: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const userInfo = useAppSelector((state) => state.user.user?.email);

  const searchHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      searchParams.set('search', searchText);
      if (searchText === '') {
        searchParams.delete('search');
      }
      setSearchParams(searchParams);
    }
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
        <Input
          className="search__elem"
          placeholder="Search"
          icon={search}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={searchHandler}
          value={searchText}
          />
      </div>
      <div className="menu">
        {!userInfo
          ? (<Link to="/signup">
              <Button className="navigation__button">Log In/ Sing Up</Button>
             </Link>)
          : <NavigationButton />
        }
      </div>
    </HeaderContainer>
  );
};

export default Header;
