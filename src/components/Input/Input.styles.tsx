import styled from 'styled-components';

export const InputContainer = styled.section`
  position: relative;
  margin: 150px 0 150px 0;
  display: flex;
  flex-direction: column;

  img {
    width: 24px;
    position: absolute;
    margin-top: 16px;
    margin-left: 104px;
  }

  input {
    max-width: 413px;
    margin-left: 80px;
    text-align: start;
    background: #F0F4EF;
    border-radius: 16px;
    padding: 18px 0 18px 64px;
    border: none;
    outline: none;

    ::placeholder {
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      align-items: center;
      letter-spacing: 0.75px;
      /* dark_grey */
      color: #B9BAC4;
    }

  }
  .inputTitle {
    margin-left: 80px;
    text-align: start;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    align-items: center;
    letter-spacing: 0.75px;
    /* dark blue */
    color: #344966;
  }
  
  `;
