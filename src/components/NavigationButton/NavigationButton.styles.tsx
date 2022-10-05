import styled from 'styled-components';
import cartIcon from '../../assets/icons/cartIcon.png';
import favoritesIcon from '../../assets/icons/favoritesIcon.png';
import profileIcon from '../../assets/icons/profileIcon.png';

export const NavigationButtonContainer = styled.section`
  display: flex;
  button {
    width: 48px;
    height: 48px;
    border-radius: 25px;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    border: none;
    background-size: 26px;
    background-repeat: no-repeat;
  }

  .cart {
    margin-right: 27px;
    background-image: url(${cartIcon});
    background-position: 10px;
  }

  .favorites {
    margin-right: 27px;
    background-image: url(${favoritesIcon});
    background-position: 11px 14px;
  }
  .profile {
    background-image: url(${profileIcon});
    background-position: 11px;
  }
  

`;
