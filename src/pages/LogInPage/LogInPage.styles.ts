import styled from 'styled-components';

export const LogInPageContainer = styled.section`
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

  .logInButton {
    padding: 10px 53px;
    display: block;
    text-align: start;
    margin: 60px 0 154px 0;
    max-width: 167px;
  }

  .readingMan {
    position: absolute;
    right: 0;
    top: 0;
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

    .logInButton {
      margin: 60px 0 104px 0;
    }

    .readingMan {
      max-width: 390px;
      margin-top: 5px;
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

    .logInButton {
      margin: 40px 0 454px 0;
    }

    .readingMan {
      right: 100px;
      top: 418px;
    }
  }

  @media only screen and (${({ theme }) => theme.media.small}) {
    max-width: 430px;
    margin: 50px auto 0 auto;

    .logInButton {
      margin: 40px 0 454px 0;
    }

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

    .logInButton {
      font-size: ${({ theme }) => theme.fontSize.small};
      margin-bottom: 377px;
    }

    .readingMan {
      max-width: 290px;
      right: 0;
      top: 378px;
    }
  }
`;
