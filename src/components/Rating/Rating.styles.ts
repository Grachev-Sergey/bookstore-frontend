import styled from 'styled-components';

export const RatingContainer = styled.div`
  svg {
    margin: 0;
    height: 33px;
    width: 57.5px;
    path {
        stroke: #BFCC94;
        stroke-width: 1;
    }
  }

  @media only screen and (${({ theme }) => theme.media.tablet}) {
    svg {
      height: 25px;
      width: 25px;
      margin-right: 17px;
    }
  }

  @media only screen and (${({ theme }) => theme.media.mobile}) {
    svg {
      height: 18px;
      width: 18px;
      margin-right: 11px;
    }
  }
`;
