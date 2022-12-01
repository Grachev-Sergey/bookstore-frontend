import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  margin: 20px 0 0 0;
  display: flex;
  flex-direction: column;

  .img {
    position: absolute;
    width: 24px;
    margin: 18px 0 0 24px;
    border: none;
  }
  
  input {
    text-align: start;
    background: ${({ theme }) => theme.colors.light};
    border-radius: ${({ theme }) => theme.borderRadius};
    font-size: ${({ theme }) => theme.fontSize.small};
    line-height: ${({ theme }) => theme.lineHight.regular};
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

  .input__title {
    margin: 9px 0 10px 0;
    text-align: start;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.imputTitle};
    line-height: ${({ theme }) => theme.lineHight.regularSmall};
    align-items: center;
    letter-spacing: 0.75px;
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  .error {
    color: ${({ theme }) => theme.colors.error};
  }

  .success {
    color: #00966D;
  }

  @media only screen and (${({ theme }) => theme.media.mobile}) {
    input {
      ::placeholder {
        font-size: ${({ theme }) => theme.fontSize.imputTitle};
      }
    }

    .input__title {
      margin-top: 4px;
      font-size: ${({ theme }) => theme.fontSize.commentDescription};
      line-height: ${({ theme }) => theme.lineHight.commentDescription};
    }
  }
`;
