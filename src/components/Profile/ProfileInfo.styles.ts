import styled from 'styled-components';

export default styled.section`
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

  .info__container {
    margin-bottom: 40px;
  }

  .password__container {
    margin-bottom: 40px;
  }

  .text__container {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    box-sizing: border-box;
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

  @media only screen and (${({ theme }) => theme.media.tablet}) {
    .title {
      font-size: 14px; 
    }
  }

  @media only screen and (${({ theme }) => theme.media.mobile}) {
    .title {
      font-size: 12px; 
    }
    .info__container {
      margin-bottom: 30px;
    }
  }
`;
