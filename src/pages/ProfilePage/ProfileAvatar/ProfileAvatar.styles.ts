import styled from 'styled-components';
import userProfile from '../../../assets/icons/userProfile.png';
import camera from '../../../assets/icons/camera.png';

export const ProfileAvatarContainer = styled.div`
  position: relative;
  width: 305px;
  height: 305px;
  background: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-repeat: no-repeat;
  margin-bottom: 10px;
  background-size: 151px;
  background-image:url(${userProfile});
  background-position: center center;
  
  .avatar { 
    border-radius: ${({ theme }) => theme.borderRadius};
    max-width: 305px;
    max-height: 305px;
  }

  .add-photo__input {
    display: none;
  }

  .add-photo__button {
    position: absolute;
    background: ${({ theme }) => theme.colors.darkBlue};
    border-radius: 50%;
    width: 48px;
    height: 48px;
    right: 0;
    bottom: 0;
    margin: 0 20px 20px 0;
    background-image:url(${camera});
    background-repeat: no-repeat;
    background-position: center center;
    cursor: pointer;
    border: none;
  }

  @media only screen and (${({ theme }) => theme.media.tablet}) {
    margin-bottom: 10px;
    background-size: 135px; 

    .add-photo__button {
      width: 40px;
      height: 40px;
      margin: 0 15px 15px 0;
    }
  }

  @media only screen and (${({ theme }) => theme.media.medium}) {
    margin-bottom: 30px;
  }

  @media only screen and (${({ theme }) => theme.media.mobile}) {
    width: 290px;
    height: 290px;
    background-repeat: no-repeat;
    margin-bottom: 30px;

    .avatar { 
      max-width: 290px;
      max-height: 290px;
    }
  }
`;
