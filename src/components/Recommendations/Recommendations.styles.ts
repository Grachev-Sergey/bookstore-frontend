import styled from 'styled-components';

export const RecommendationsContainer = styled.section`
  display: flex;
  margin-top: 50px;
  svg {
    width: 55.5px;
  }
  @media only screen and (${({ theme }) => theme.media.tablet}) {
    svg {
      width: 25.5px;
    }
  }
  @media only screen and (${({ theme }) => theme.media.small}) {
    margin-top: 30px;

    svg {
      width: 20.5px;
    }
  }
`;
