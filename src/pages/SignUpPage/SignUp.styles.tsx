import styled from 'styled-components';

export const SignUpPageContainer = styled.section`
  max-width: 1280px;
  margin: 90px auto 0 auto;
  position: relative;
  
  form {
    max-width: 413px;
  }
  
  h2 {
    margin-bottom: 60px;
    text-align: start;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.title};
    line-height: ${({ theme }) => theme.lineHight.title};
    color: ${({ theme }) => theme.colors.dark};
  }

  .signUpButton {
    padding: 10px 53px;
    display: block;
    text-align: start;
    margin: 60px 0 54px 0;
    max-width: 167px;
  }

  .readingMan {
    position: absolute;
    right: 0;
    top: 0;
  }

  .logIn {
    display: flex;
    justify-content: center;
    margin-bottom: 52px;
  }

  .logIn__title {
    line-height: ${({ theme }) => theme.lineHight.titleTablet};
    margin-right: 40px;
  }

  @media only screen and (${({ theme }) => theme.media.tablet}) {
    max-width: 804px;
    margin: 100px auto 0 auto;

    form {
      max-width: 392px;
    }

    h2 {
      font-size: ${({ theme }) => theme.fontSize.titleTablet};
      line-height: ${({ theme }) => theme.lineHight.titleTablet};
    }

    .readingMan {
      max-width: 390px;
      margin-top: 83px;
    }
  }

  @media only screen and (${({ theme }) => theme.media.medium}) {
    max-width: 590px;
    margin: 60px auto 0 auto;

    form {
      max-width: 600px;
    }

    h2 {
      margin-bottom: 40px;
    }

    .signUpButton {
      margin: 40px 0 34px 0;
    }

    .readingMan {
      right: 100px;
      top: 570px;
    }

    .logIn {
      flex-direction: column;
      align-items: center;
      margin-bottom: 410px;
    }

    .logIn__title {
      line-height: ${({ theme }) => theme.lineHight.titleTablet};
      margin-right: 0;
    }

    .logIn__button {
      max-width: 166px;
    }
  }

  @media only screen and (${({ theme }) => theme.media.small}) {
    max-width: 430px;
    margin: 50px auto 0 auto;

    .readingMan {
      right: 20px;
    }
  }

  @media only screen and (${({ theme }) => theme.media.mobile}) {
    max-width: 290px;
    margin: 30px auto 0 auto;

    h2 {
      font-size: ${({ theme }) => theme.fontSize.filter};
      line-height: ${({ theme }) => theme.lineHight.regular};
      margin-bottom: 30px;
    }

    .signUpButton {
      font-size: ${({ theme }) => theme.fontSize.small};
      margin-bottom: 20px;
    }

    .logIn {
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 360px;
    }

    .logIn__title {
      font-size: ${({ theme }) => theme.fontSize.commentDescription};
      margin-right: 0;
    }

    .logIn__button {
      width: 166px;
      font-size: ${({ theme }) => theme.fontSize.small};
    }

    .readingMan {
      max-width: 290px;
      right: 0;
      top: 520px;
    }
  }
`;
