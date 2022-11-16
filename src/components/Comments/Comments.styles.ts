import styled from 'styled-components';

export const CommentsContainer = styled.div`
  margin-top: 40px;
  max-width: 738px;

  .no-comments {
    text-align: start;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.regular};
    line-height: ${({ theme }) => theme.lineHight.regularBig};
    color: ${({ theme }) => theme.colors.darkGray};
  }

  .add-comments {
    display: flex;
    flex-direction: column;
    margin-top: 60px;
  }

  .add-comments__textarea {
    min-height: 128px;
    background: ${({ theme }) => theme.colors.light};
    border-radius: ${({ theme }) => theme.borderRadius};;
    border: none;
    resize: none;
    padding: 15px;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: ${({ theme }) => theme.fontSize.small};
    line-height: ${({ theme }) => theme.lineHight.regular};
    letter-spacing: 0.75px;
    :focus {
      outline: none;
    }
    ::placeholder {
    /* dark_grey */
    color: #B9BAC4;
    }
  }

  .add-comments__button {
    margin-top: 30px;
    max-width: 277px;
    letter-spacing: 0.75px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.regular};
    line-height: ${({ theme }) => theme.lineHight.regularBig};
    color: ${({ theme }) => theme.colors.light};
  }
`;
