import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.dark};
`;

export const FooterContainer = styled.section`
  display: flex;
  max-width: 1280px;
  margin: 0 auto;
  padding: 73px 0;

  p, a {
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.regular};
    line-height: ${({ theme }) => theme.lineHight.regularBig};
    color: ${({ theme }) => theme.colors.light};
    text-decoration: none;
  }

  .contacts {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .email {
    margin-top: 40px;
  }

  .phone{
    margin-top: 5px;
  }

  .links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 166px;
  }

  .links a:not(:last-child) {
    margin-bottom: 5px;
  }

  .address {
    margin-left: 315px;
    text-align: start;
  }

  img {
    max-width: 100%;
  }

  @media only screen and (${({ theme }) => theme.media.tablet}) {
    max-width: 804px;
 
    p, a {
      font-size: ${({ theme }) => theme.fontSize.small};
      line-height: ${({ theme }) => theme.lineHight.regularSmall};
      text-decoration: none;
    }

    .email {
      margin-top: 30px;
    }

    .links {
      margin-left: 56px;
      min-width: 100px;
    }

    .links a:not(:last-child) {
      margin-bottom: 11px;
    }

    .address {
      margin-left: 42px;
    }
  }

  @media only screen and (${({ theme }) => theme.media.medium}) {
    max-width: 580px;
    flex-wrap: wrap;
    padding: 73px 0 30px 0;

    .links {
      margin-left: 265px;
      align-items: flex-end;
    }

    .address {
      margin: 40px 0 0 83px;
      text-align: center;
    }
  }

  @media only screen and (${({ theme }) => theme.media.small}) {
    max-width: 430px;

    .links {
      margin-left: 112px;
    }

    .address {
      margin: 40px 0 0 5px;
      text-align: center;
    }
  }

  @media only screen and (${({ theme }) => theme.media.mobile}) {
    max-width: 290px;

    .links {
      margin: 40px 0 0 0;
      align-items: flex-start;
    }

    .address {
      margin: 40px 0 0 0;
      text-align: start;
    }
  }

`;
