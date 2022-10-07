import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  margin: 30px 0 0 0;
  display: flex;
  flex-direction: column;

  img {
    width: 24px;
    position: absolute;
    margin-top: 15px;
    margin-left: 24px;
  }

  input {
    max-width: 413px;
    text-align: start;
    background: ${({ theme }) => theme.colors.light};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 18px 0 18px 64px;
    border: none;
    outline: none;

    ::placeholder {
      font-weight: ${({ theme }) => theme.fontWeight.regular};
      font-size: ${({ theme }) => theme.fontSize.small};
      line-height: ${({ theme }) => theme.lineHight.regular};
      align-items: center;
      letter-spacing: 0.75px;
      color: ${({ theme }) => theme.colors.darkGray};
    }

  }

  .inputTitle {
    margin-top: 9px;
    text-align: start;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.imputTitle};
    line-height: ${({ theme }) => theme.lineHight.regularSmall};
    align-items: center;
    letter-spacing: 0.75px;
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  .errorTitle {
    position: absolute;
    bottom: -20px;
    left: 0;
    color: ${({ theme }) => theme.colors.error};
  }

  @media only screen and (${({ theme }) => theme.media.tablet}) {
    input {
      max-width: 392px;
    }
  }

  @media only screen and (${({ theme }) => theme.media.medium}) {
    input {
      max-width: 600px;
    }
  }

  @media only screen and (${({ theme }) => theme.media.mobile}) {
    input {
      ::placeholder {
        font-size: ${({ theme }) => theme.fontSize.imputTitle};
      }
    }
    .inputTitle {
      margin-top: 4px;
      font-size: ${({ theme }) => theme.fontSize.commentDescription};
      line-height: ${({ theme }) => theme.lineHight.commentDescription};
    }
  }
`;
