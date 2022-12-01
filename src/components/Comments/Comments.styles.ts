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
      color: ${({ theme }) => theme.colors.darkGray};
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

  @media only screen and (${({ theme }) => theme.media.tablet}) {
    max-width: 667px;

    .no-comments {
      font-size: ${({ theme }) => theme.fontSize.small};
      line-height: ${({ theme }) => theme.lineHight.regularSmall};
    }

    .add-comments {
      margin-top: 40px;
    }

    .add-comments__textarea {
      min-width: 738px;
    }
  }

  @media only screen and (${({ theme }) => theme.media.medium}) {
    max-width: 580px;

    .no-comments {
      font-size: ${({ theme }) => theme.fontSize.small};
      line-height: ${({ theme }) => theme.lineHight.regularSmall};
    }

    .add-comments {
      margin-top: 40px;
    }

    .add-comments__textarea {
      min-width: 580px;
    }
  }

  @media only screen and (${({ theme }) => theme.media.small}) {
    max-width: 430px;
    margin-top: 20px;

    .add-comments__textarea {
      min-width: 430px;
    }
  }

  @media only screen and (${({ theme }) => theme.media.mobile}) {
    max-width: 290px;

    .no-comments {
      font-size: ${({ theme }) => theme.fontSize.imputTitle};
      line-height: ${({ theme }) => theme.lineHight.small};
    }

    .add-comments {
      margin-top: 20px;
    }
    
    .add-comments__textarea {
      min-width: 290px;
      padding: 20px 0 0 24px;
      font-size: ${({ theme }) => theme.fontSize.commentDescription};
    }

    .add-comments__button {
      max-width: 210px;
      letter-spacing: 0.75px;
      font-size: ${({ theme }) => theme.fontSize.commentDescription};
      line-height: ${({ theme }) => theme.lineHight.commentDescription};
    }
  }
`;
