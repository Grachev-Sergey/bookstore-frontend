import styled, { css } from 'styled-components';

export const PaginationContainer = styled.div<{ userId: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ userId }) => (userId
    ? css`
      margin-bottom: 150px;
    `
    : css`
      margin-bottom: 92px;
    `)
}

  .page-button {
    width: 7px;
    height: 14px;
    cursor: pointer;
  }

  .previous-page__button {
    margin-right: 61px;
  }

  .next-page__button {
    margin-left: 61px;
  }

  .indicator-block {
    display: flex;
    align-items: center;
    gap: 36px;
  }

  .indicator {
    height: 14px;
    width: 14px;
    border: 2px solid black;
    border-radius: 50%;
  }

  .indicator--selected {
    background-color: black;
  }

  @media only screen and (${({ theme }) => theme.media.tablet}) {
    margin-top: 30px;
    ${({ userId }) => (userId
    ? css`
      margin-bottom: 100px;
    `
    : css`
      margin-bottom: 82px;
    `)
}
  }

  @media only screen and (${({ theme }) => theme.media.small}) {
    ${({ userId }) => (userId
    ? css`
      margin-bottom: 70px;
    `
    : css`
      margin-bottom: 75px;
    `)
}
  }

  @media only screen and (${({ theme }) => theme.media.mobile}) {
    margin-top: 10px;
  }
`;
