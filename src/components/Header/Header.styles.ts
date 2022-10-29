import styled from 'styled-components';

export const HeaderContainer = styled.header`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;

  .logo {
    margin-top: 32px;
    height: 46px;
  }

  .link {
    margin: 42px 0 0 128px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.small};
    line-height: ${({ theme }) => theme.lineHight.regularSmall};
    color: ${({ theme }) => theme.colors.dark};
    text-decoration: none;
  }

  .search {
    margin: 0 0 0 43px;
    width: 49%;
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

    .search {
      margin: 0 0 0 73px;
      width: 30.8%;
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

    .search {
      margin: 0 0 0 33px;
      width: 89.5%;
    }

    .menu {
      margin: 25px 0 0 394px;
      position: absolute;
    }

    .magnifier {
      margin: 32px 0 0 55px;
    }
  }

  @media only screen and (${({ theme }) => theme.media.small}) {
    max-width: 430px;

    .logo {
      margin: 28px 0 0 0;
    }

    .link {
      margin: 38px 0 0 25px;
    }

    .search {
      margin: 0;
      width: 100%;
    }

    .magnifier {
      margin: 32px 0 0 20px;
    }

    .menu {
      margin: 25px 0 0 210px;
    }
  }

  @media only screen and (${({ theme }) => theme.media.mobile}) {
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

    .menu {
      max-width: 135px;
      margin: 32px 0 0 170px;
    } 
  }
`;
