import styled from 'styled-components';

export default styled.div`
width: 100%;
  .textBlock {
    background: ${(p) => p.theme.mainTheme.color.light};
    border-radius: ${(p) => p.theme.borderRadius};
    width: 100%;
    max-width: 522px;
    height: 64px;
    padding:30px 0 0 64px;
    box-sizing: border-box;
    text-align: start;
    p {
      font-size: 16px;
      line-height: 28px;
      letter-spacing: 0.75px;
      color: ${(p) => p.theme.mainTheme.color.dark};
      font-weight: 400;
    }
    input {
      box-sizing: border-box;
      background: ${(p) => p.theme.mainTheme.color.light};
      outline: none;
      border: none;
      font-family: ${(p) => p.theme.font.family};
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      letter-spacing: 0.75px;
      color: ${(p) => p.theme.mainTheme.color.dark};
      width: 50%;
    }
  }
  .groupContainer{
    margin-bottom: 40px;
  }

  .textContainer {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    display: flex;
    box-sizing: border-box;
    .title {
      position: absolute;
      left: 64px;
      font-size: 14px;
      line-height: 24px;
      display: flex;
      letter-spacing: 0.75px;
      color: ${(p) => p.theme.mainTheme.color.darkBlue};
      transform: translate(0, -12px);
    }
  }
  @media (max-width: 670px) {
    .textBlock {
      max-width: 670px;
    }
  }
`;