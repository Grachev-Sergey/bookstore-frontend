import styled from 'styled-components';

export const HeaderContainer = styled.section`
  margin: 0 auto;
  display: flex;

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

  p {
  margin: 42px 0 0 128px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};;
  font-size: ${({ theme }) => theme.fontSize.small};
  line-height: ${({ theme }) => theme.lineHight.regularSmall};
  }

  .logo {
    margin-top: 32px;
    height: 46px
  }

  .magnifier {
    position: absolute;
    width: 24px;
    margin: 42px 0 0 60px;
  }

  .menu {
    margin: 32px 0 0 97.5px;
  }
`;
