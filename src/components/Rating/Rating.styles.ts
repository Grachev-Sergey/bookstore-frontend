import styled from 'styled-components';

export const RatingContainer = styled.div`
  svg {
    margin-top: 4px;
    width: 52px;
    path {
        stroke: #BFCC94;
        stroke-width: 1;
    }
  }
  @media only screen and (${({ theme }) => theme.media.tablet}) {
    svg {
      height: 29px;
      width: 43px;
    }
  }

  @media only screen and (${({ theme }) => theme.media.medium}) {
    svg {
      height: 33px;
      width: 48px;
    }
  }

  @media only screen and (${({ theme }) => theme.media.small}) {
    svg {
      height: 25px;
      width: 33px;
    }
  }

  @media only screen and (${({ theme }) => theme.media.mobile}) {
    svg {
      height: 17px;
      width: 21px;
    }
  }
`;
