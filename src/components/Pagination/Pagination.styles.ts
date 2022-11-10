import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

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
  }

  .indicator {
    :not(:first-child) {
    margin-left: 37px;
  }
  }
`;
