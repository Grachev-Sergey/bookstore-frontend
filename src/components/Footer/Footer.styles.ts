import styled from 'styled-components';

export const FooterContainer = styled.section`
  display: flex;
  background-color: ${({ theme }) => theme.colors.dark};
  padding: 73px 0;
  p, a {
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.regular};
    line-height: ${({ theme }) => theme.lineHight.regularBig};
    color: ${({ theme }) => theme.colors.light};
    text-decoration: none;
  }
  .contacts {
    margin-left: 80px;
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
    margin-left: 200px;
  }

`;
