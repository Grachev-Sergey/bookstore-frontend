import styled from 'styled-components';
import profile from '../../images/icons/User_profile.svg';

export const ProfilePageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  justify-content: space-between;
  padding-right: 305px;
  margin: auto 0;

  .avatarContainer {
    position: relative;
    width: 305px;
    height: 305px;
    background: ${(p) => p.theme.mainTheme.color.light};
    border-radius: 16px;
    background-repeat: no-repeat;
    margin-bottom: 10px;
    background-size: 151px;
    background-image:url(${profile});
    background-position: center center;
    .avatar { 
      object-fit: cover;
      border-radius:16px;
      width: 100%;
      height: 100%;
    }
  }

  .addPhotoButton {
    background: ${(p) => p.theme.mainTheme.color.darkBlue};
    border-radius: 50%;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    // еще должен быть медиазапрос
  }

  .titleAndChangeButton {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 30px;
    flex-wrap: wrap;
    .changeButton {
      font-size: 14px;
      line-height: 21px;
      text-decoration-line: underline;
      color: ${(p) => p.theme.mainTheme.color.darkGreen};
      cursor: pointer;
    }
  }
  .formContainer {
    margin-bottom: 100px;
    margin-left: 15px;
    width: 100%;
    max-width: 522px;
  }
  @media (max-width: 1320px) {
    padding-right: 0;
    .avatarContainero {
      width: 255px;
      height: 255px;
    }
  }
  @media (max-width: 670px) {
    flex-direction: column;
    align-items: center;
    .formContainer {
      margin-left: 0;
      max-width: 670px;
    }
    .avatarContainer {
      width: 100%;
      max-width: 685px;
    }
  }
`;