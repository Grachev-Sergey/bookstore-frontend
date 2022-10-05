import styled from 'styled-components';

export const CatalogContainer = styled.section`
  max-width: 1280px;
  margin: 110px auto;

  h2 {
    text-align: start;
    font-weight: ${({ theme }) => theme.fontWeight.title};
    font-size: ${({ theme }) => theme.fontSize.title};
    line-height: ${({ theme }) => theme.lineHight.title};
    color: ${({ theme }) => theme.colors.dark};
  }

  @media only screen and (${({ theme }) => theme.media.tablet}) {
    max-width: 804px;

    h2{
      font-size: ${({ theme }) => theme.fontSize.titleTablet};
      line-height: ${({ theme }) => theme.lineHight.titleTablet};
    }
  }

  @media only screen and (${({ theme }) => theme.media.medium}) {
    max-width: 580px;
  }

  @media only screen and (${({ theme }) => theme.media.small}) {
    max-width: 430px;
  }

  @media only screen and (${({ theme }) => theme.media.mobile}) {
    max-width: 290px;

    h2 {
      font-size: ${({ theme }) => theme.fontSize.filter};
      line-height: ${({ theme }) => theme.lineHight.regular};
    }
  }
`;
