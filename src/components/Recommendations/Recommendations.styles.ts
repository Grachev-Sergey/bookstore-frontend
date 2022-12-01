import styled from 'styled-components';

export const RecommendationsContainer = styled.section`
  display: flex;
  margin-top: 50px;
  overflow: hidden;
  flex-wrap: nowrap;
  gap: 0 20px;
  svg {
    width: 52px;
  }

  @media only screen and (${({ theme }) => theme.media.tablet}) {
    svg {
      height: 29px;
      width: 43px;
    }
  }

  @media only screen and (${({ theme }) => theme.media.medium}) {
    margin-top: 30px;

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
