import styled from 'styled-components';
import cartIcon from '../../assets/icons/cartIcon.png';
import favoritesIcon from '../../assets/icons/favoritesIcon.png';
import profileIcon from '../../assets/icons/profileIcon.png';

export const NavigationButtonContainer = styled.div`
  display: flex;
  button {
    width: 48px;
    height: 48px;
    border-radius: 25px;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    border: none;
    background-size: 26px;
    background-repeat: no-repeat;
    cursor: pointer;
  }

  .cart {
    margin-right: 27px;
    background-image: url(${cartIcon});
    background-position: center center;
  }

  .favorites {
    margin-right: 27px;
    background-image: url(${favoritesIcon});
    background-position: 10px 14px;
  }
  .profile {
    background-image: url(${profileIcon});
    background-position: center center;
  }
  
  @media only screen and (${({ theme }) => theme.media.mobile}) {
    button {
      width: 33px;
      height: 32px;
      background-size: 18px;
    }
    .cart {
      margin-right: 18px;
      background-position: center center;
    }
    .favorites {
      margin-right: 18px;
      background-position: 8px 8px;
    }
    .profile {
      background-image: url(${profileIcon});
      background-position: center center;
    }
  }

`;
