import styled from 'styled-components';

export const BookPageContainer = styled.section`
  margin: 60px auto 0 auto;
  max-width: 1280px;
  position: relative;

  h2 {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.title};
    line-height: ${({ theme }) => theme.lineHight.title};
    color: ${({ theme }) => theme.colors.dark};
  }

  .book-block {
    display: flex;
  }

  .book-info-wrapper {
    margin-left: 128px;
  }

  .comments {
    margin-top: 110px;
  }

  .comments__title {
    text-align: start;
  }

  .recommendations {
    margin: 110px 0;
  }

  .recommendations__title {
    text-align: start;
  }

  @media only screen and (${({ theme }) => theme.media.tablet}) {
    max-width: 804px;

    h2 {
      font-size: ${({ theme }) => theme.fontSize.titleTablet};
      line-height: ${({ theme }) => theme.lineHight.titleTablet};
    }

    .book-info-wrapper {
      margin-left: 21px;
    }

    .comments {
      margin-top: 88px;
    }

    .recommendations {
      margin-top: 88px;
    }
  }

  @media only screen and (${({ theme }) => theme.media.medium}) {
    max-width: 580px;

    .book-block {
      align-items: flex-start;
      flex-direction: column;
    }

    .book-info-wrapper {
      margin-left: 0;
    }
  }

  @media only screen and (${({ theme }) => theme.media.small}) {
    max-width: 430px;

    h2 {
      font-size: ${({ theme }) => theme.fontSize.author};
      line-height: ${({ theme }) => theme.lineHight.author};
    }
  }

  @media only screen and (${({ theme }) => theme.media.mobile}) {
    max-width: 290px;

    h2 {
      font-size: ${({ theme }) => theme.fontSize.filter};
      line-height: ${({ theme }) => theme.lineHight.small};
    }

    .comments {
      margin-top: 30px;
    }

    .recommendations {
      margin-top: 60px;
    }
  }
`;
