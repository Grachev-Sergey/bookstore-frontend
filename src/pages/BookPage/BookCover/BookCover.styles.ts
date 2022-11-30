import styled from 'styled-components';

export const BookCoverContainer = styled.div`
  position: relative;

  .picture {
    width: 522px;
    height: 779px;
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  .favorite-button {
    position: absolute;
    width: 58px;
    height: 58px;
    right: 30px;
    top: 30px;
    cursor: pointer;
  }

  @media only screen and (${({ theme }) => theme.media.tablet}) {
    .picture {
      width: 391px;
      height: 584px;
    }

    .favorite-button {
      width: 48px;
      height: 48px;
    }
  }

  @media only screen and (${({ theme }) => theme.media.medium}) {
    .picture {
      width: 290px;
      height: 483px;
    }
  }

  @media only screen and (${({ theme }) => theme.media.small}) {
    .favorite-button {
      width: 35px;
      height: 35px;
      right: 19px;
      top: 16px;
    }

    .picture {
      width: 190px;
      height: 275px;
    }
  }

  @media only screen and (${({ theme }) => theme.media.mobile}) {
    .favorite-button {
      width: 25px;
      height: 25px;
    }

   .picture {
      width: 135px;
      height: 202px;
    }
  }
`;
