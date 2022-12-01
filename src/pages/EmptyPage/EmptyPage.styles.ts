import styled from 'styled-components';

export const EmptyPageContainer = styled.div`
  max-width: 1007px;
  margin: 118px auto 104px auto;
  display: flex;
  
  .empty-page {
    margin-left: 109px;
    text-align: start;
  }

  .empty-page__title {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.title};
    line-height: ${({ theme }) => theme.lineHight.title};
    color: ${({ theme }) => theme.colors.dark};
  }

  .empty-page__text {
    max-width: 465px;
    margin-top: 20px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.author};
    line-height: ${({ theme }) => theme.lineHight.author};
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  .empty-page__button {
    margin-top: 60px;
  }

  @media only screen and (${({ theme }) => theme.media.tablet}) {
    max-width: 804px;

    .empty-page {
      margin-left: 62px;
    }

    .stack-of-books {
      width: 350px;
      height: 212px;
    }

    .empty-page__title {
      font-size: ${({ theme }) => theme.fontSize.titleTablet};
      line-height: ${({ theme }) => theme.lineHight.titleTablet};
    }

    .empty-page__text {
      max-width: 310px;
      font-size: ${({ theme }) => theme.fontSize.small};
      line-height: ${({ theme }) => theme.lineHight.regularSmall};
    }

    .empty-page__button {
      margin-top: 50px;
    }
  }

  @media only screen and (${({ theme }) => theme.media.medium}) {
    max-width: 580px;
    flex-direction: column-reverse;
    align-items: center;
    margin: 50px auto 0 auto;

    .stack-of-books {
      margin-top: 40px;
    }

    .empty-page {
      margin: 0;
      display: flex;
      flex-direction: column;
    }

    .empty-page__text {
      margin-top: 15px;
      max-width: 100%;
    }

    .empty-page__button {
      margin-top: 30px;
    }
  }

  @media only screen and (${({ theme }) => theme.media.small}) {
    max-width: 430px;
  }

  @media only screen and (${({ theme }) => theme.media.mobile}) {
    max-width: 290px;

    .stack-of-books {
      width: 290px;
      height: 176px;
    }

    .empty-page__title {
      font-size: ${({ theme }) => theme.fontSize.filter};
      line-height: ${({ theme }) => theme.lineHight.regular};
    }

    .empty-page__text {
      font-size: ${({ theme }) => theme.fontSize.commentDescription};
      line-height: ${({ theme }) => theme.lineHight.commentDescription};
    }
  }
`;
