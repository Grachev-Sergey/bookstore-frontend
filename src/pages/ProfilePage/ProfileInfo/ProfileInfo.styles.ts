import styled from 'styled-components';

export const ProfileInfoContainer = styled.div`
  width: 100%;
  .info__icon {
    width: 24px;
    position: absolute;
    margin-left: 24px;
    border: none;
  }

  .text__block {
    background: ${({ theme }) => theme.colors.light};
    border-radius: ${({ theme }) => theme.borderRadius};
    width: 100%;
    max-width: 522px;
    height: 64px;
    padding:30px 0 0 64px;
    box-sizing: border-box;
    text-align: start;
  }

  p {
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: ${({ theme }) => theme.fontSize.small}; 
    line-height: ${({ theme }) => theme.lineHight.regular};
    letter-spacing: 0.75px;
    color: ${({ theme }) => theme.colors.dark};
  }

  .info-container {
    position: relative;
    margin-bottom: 40px;
  }

  .text__container {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    box-sizing: border-box;
  }

  .input-container {
    margin-bottom: 20px;
  }

  .title {
    position: absolute;
    left: 64px;
    font-size: ${({ theme }) => theme.fontSize.inputTitle}; 
    line-height: ${({ theme }) => theme.lineHight.regularSmall}; 
    letter-spacing: 0.75px;
    color: ${({ theme }) => theme.colors.darkBlue};
    transform: translate(0, -12px);
  }

  .confirm-button {
    margin-top: 40px;
    display: block;
    text-align: start;
  }

  @media only screen and (${({ theme }) => theme.media.tablet}) {
    .title {
      font-size: 14px; 
    }

    .confirm-button {
      margin-top: 40px;
      padding: 10px 50px;
      font-size: ${({ theme }) => theme.fontSize.small};
      line-height: ${({ theme }) => theme.lineHight.regularSmall};
    }
  }

  @media only screen and (${({ theme }) => theme.media.mobile}) {
    .title {
      font-size: 12px; 
    }
    .info-container {
      margin-bottom: 30px;
    }
  }
`;
