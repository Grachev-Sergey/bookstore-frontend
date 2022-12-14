import styled from 'styled-components';

export const CatalogContainer = styled.section`
  max-width: 1280px;
  margin: 110px auto 0 auto;

  .header {
    display: flex;
    margin-bottom: 50px;
    justify-content: space-between;
  }

  h2 {
    text-align: start;
    font-weight: ${({ theme }) => theme.fontWeight.title};
    font-size: ${({ theme }) => theme.fontSize.title};
    line-height: ${({ theme }) => theme.lineHight.title};
    color: ${({ theme }) => theme.colors.dark};
  }

  .books-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0 20px
  }

  .pagination {
    margin-top: 18px;
  }

  @media only screen and (${({ theme }) => theme.media.tablet}) {
    max-width: 804px;
    margin: 60px auto 0 auto;

    .header {
      flex-wrap: wrap;
    }

    h2{
      font-size: ${({ theme }) => theme.fontSize.titleTablet};
      line-height: ${({ theme }) => theme.lineHight.titleTablet};
      margin-bottom: 20px;
    }
  }

  @media only screen and (${({ theme }) => theme.media.medium}) {
    max-width: 580px;
    margin: 20px auto 100px auto;
    .header {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
    }
  }

  @media only screen and (${({ theme }) => theme.media.small}) {
    max-width: 430px;
    margin: 20px auto 70px auto;
  }

  @media only screen and (${({ theme }) => theme.media.mobile}) {
    max-width: 290px;

    h2 {
      font-size: ${({ theme }) => theme.fontSize.filter};
      line-height: ${({ theme }) => theme.lineHight.regular};
    }
  }
`;
