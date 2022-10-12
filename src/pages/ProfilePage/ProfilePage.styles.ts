import styled from 'styled-components';
import userProfile from '../../assets/icons/userProfile.png';
import profileIcon from '../../assets/icons/profileIcon.png';

export const ProfilePageContainer = styled.section`
  max-width: 1280px;
  margin: 60px auto 0 auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  padding-right: 305px;

  .avatarContainer {
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
  }
  
  .avatar { 
    border-radius: ${({ theme }) => theme.borderRadius};
    width: 100%;
    height: 100%;
  }

  .addPhotoButton {
    position: absolute;
    background: ${({ theme }) => theme.colors.darkBlue};
    border-radius: 50%;
    width: 48px;
    height: 48px;
    right: 0;
    bottom: 0;
    margin: 0 20px 20px 0;
    background-image:url(${profileIcon});
    background-repeat: no-repeat;
    background-position: center center;
    cursor: pointer;
    border: none;
  }
  
  .formContainer {
    margin-bottom: 100px;
    margin-left: 128px;
    width: 100%;
    max-width: 522px;
  }

  .titleAndChangeButton {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 30px;
    flex-wrap: wrap;
  }

  .profileTitle, .passwordTitle {
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: ${({ theme }) => theme.fontSize.regular};
    line-height: ${({ theme }) => theme.lineHight.regularBig};
    color: ${({ theme }) => theme.colors.dark};
  }

  .changeButton {
    font-size: ${({ theme }) => theme.fontSize.inputTitle};
    line-height: ${({ theme }) => theme.lineHight.small};
    color: ${({ theme }) => theme.colors.darkGreen};
    text-decoration-line: underline;
    cursor: pointer;
  }

  .confirmButton {
    display: block;
    text-align: start;
  }

  @media only screen and (${({ theme }) => theme.media.tablet}) {
    max-width: 804px;
    padding-right: 0;

    .avatarContainer {
      margin-bottom: 10px;
      background-size: 135px; 
    }

    .addPhotoButton {
      width: 40px;
      height: 40px;
      margin: 0 15px 15px 0;
    }

    .formContainer {
      margin-bottom: 100px;
      margin-left: 20px;
      width: 100%;
      max-width: 529px;
    }

    .titleAndChangeButton {
      margin-bottom: 20px;
    }

    .profileTitle, .passwordTitle {
      font-size: ${({ theme }) => theme.fontSize.small};
      line-height: ${({ theme }) => theme.lineHight.regularSmall};
    }

    .changeButton {
      font-size: ${({ theme }) => theme.fontSize.commentDescription};
      line-height: ${({ theme }) => theme.lineHight.commentDescription};
    }

    .confirmButton {
      padding: 10px 50px;
      font-size: ${({ theme }) => theme.fontSize.small};
      line-height: ${({ theme }) => theme.lineHight.regularSmall};
    }
  }
  
  @media only screen and (${({ theme }) => theme.media.medium}) {
    max-width: 590px;
    flex-direction: column;
    align-items: center;

    .avatarContainer {
      margin-bottom: 30px;
    }
  }

  @media only screen and (${({ theme }) => theme.media.small}) {
    max-width: 430px;
    .formContainer {
      margin-left: 0;
    }
  }

  @media only screen and (${({ theme }) => theme.media.mobile}) {
    max-width: 290px;

    .avatarContainer {
      width: 290px;
      height: 290px;
      background-repeat: no-repeat;
      margin-bottom: 30px;
    }

    .titleAndChangeButton {
      margin-bottom: 10px;
    }

    .profileTitle {
      margin: 0 20px 10px 0;
    }

    .profileTitle, passwordTitle {
      font-size: ${({ theme }) => theme.fontSize.small};
      line-height: ${({ theme }) => theme.lineHight.regularSmall};
    }

    .changeButton {
      margin-bottom: 3px;
    }
  }
`;
