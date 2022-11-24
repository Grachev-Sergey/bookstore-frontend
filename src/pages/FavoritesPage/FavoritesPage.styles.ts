import styled from 'styled-components';

export const FavoritesPageContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  max-width: 1280px;
  margin: 60px auto 0 auto;

  @media only screen and (${({ theme }) => theme.media.tablet}) {
    max-width: 804px;
  }

  @media only screen and (${({ theme }) => theme.media.medium}) {
    max-width: 580px;
    margin: 20px auto 0 auto;
  }

  @media only screen and (${({ theme }) => theme.media.small}) {
    max-width: 430px;
  }

  @media only screen and (${({ theme }) => theme.media.mobile}) {
    max-width: 290px;
  }
`;
