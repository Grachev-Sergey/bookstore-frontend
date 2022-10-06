import styled from 'styled-components';

export const HeaderContainer = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;

  .logo {
    margin-top: 32px;
    height: 46px;
  }

  .link {
    margin: 42px 0 0 128px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};;
    font-size: ${({ theme }) => theme.fontSize.small};
    line-height: ${({ theme }) => theme.lineHight.regularSmall};
    color: ${({ theme }) => theme.colors.dark};
    text-decoration: none;
  }
  
  input {
    margin: 24px 0 0 43px;
    padding: 20px 309px 20px 64px;
    background: ${({ theme }) => theme.colors.light};
    border: none;
    border-radius: 16px;
    outline: 0;

    ::placeholder {
      font-weight: ${({ theme }) => theme.fontWeight.regular};
      font-size: ${({ theme }) => theme.fontSize.small};
      line-height: ${({ theme }) => theme.lineHight.regularSmall};
      display: flex;
      align-items: center;
      letter-spacing: 0.75px;
      color: ${({ theme }) => theme.colors.dark_grey};
    }
  }

  .magnifier {
    position: absolute;
    width: 24px;
    margin: 42px 0 0 60px;
  }

  .menu {
    margin: 32px 0 0 93px;
  }

  @media only screen and (${({ theme }) => theme.media.tablet}) {
    max-width: 804px;

    .logo {
      margin-top: 28px;
    }

    .link {
      margin: 38px 0 0 51px;
    }

    input {
      margin: 20px 0 0 73px;
      padding: 20px 0 20px 64px;
      max-width: 247px;
    }

    .magnifier {
      margin: 37px 0 0 90px;
    }

    .menu {
      margin: 25px 0 0 51.5px;
    }
  }

  @media only screen and (${({ theme }) => theme.media.medium}) {
    flex-wrap: wrap;
    max-width: 650px;

    .logo {
      margin: 28px 0 0 33px;
    }

    .link {
      margin: 38px 0 0 100px;
    }

    input {
      margin: 20px 0 0 33px;
      padding: 20px 250px 20px 64px;
      max-width: 1000px;
    }

    .menu {
      margin: 25px 0 0 380px;
      position: absolute;
    }

    .magnifier {
      margin: 37px 0 0 55px;
    }
  }

  @media only screen and (${({ theme }) => theme.media.small}) {
    flex-wrap: wrap;
    max-width: 430px;

    .logo {
      margin: 28px 0 0 0;
    }

    .link {
      margin: 38px 0 0 25px;
    }

    input {
      margin: 20px 0 0 0;
      padding: 20px 110px 20px 64px;
      max-width: 1000px;
    }

    .magnifier {
      margin: 37px 0 0 20px;
    }

    .menu {
      margin: 25px 0 0 210px;
    }

  }

  @media only screen and (${({ theme }) => theme.media.mobile}) {
    flex-wrap: wrap;
    max-width: 290px;

    .logo {
      margin-top: 37px;
      height: 31px
    }

    .link {
      margin: 42px 0 0 18px;
      font-size: ${({ theme }) => theme.fontSize.imputTitle};
      line-height: ${({ theme }) => theme.lineHight.small};
    }

    input {
      margin: 20px 0 0 0;
      padding: 20px 0px 20px 63px;
      max-width: 290px;
    }
    .menu {
      max-width: 135px;
      margin: 32px 0 0 170px;
    } 
  }
`;
