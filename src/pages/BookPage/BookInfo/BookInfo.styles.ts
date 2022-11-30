import styled from 'styled-components';

export const BookInfoContainer = styled.div`
  text-align: start;

  h2 {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.title};
    line-height: ${({ theme }) => theme.lineHight.title};
    color: ${({ theme }) => theme.colors.dark};
  }

  .book-info__author {
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.author};
    line-height: ${({ theme }) => theme.lineHight.author};
    color: ${({ theme }) => theme.colors.dark};
  }

  .book-info__rating {
    margin-top: 30px;
    display: flex;
    align-items: center;
  }

  svg {
    width: 52px;
  }

  .rating__text {
    margin: 0 25px 0 14px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.small};
    line-height: ${({ theme }) => theme.lineHight.regularSmall};
    color: ${({ theme }) => theme.colors.darkGray};
  }

  .rating__container {
    display: flex;
    align-items: center;
  }

  .rate-this-book {
    display: flex;
    align-items: center;
    margin-left: 27px;
  }

  .rate-this-book__img {
    width: 24px;
    height: 24px;
  }

  .rate-this-book__text {
    margin-left: 10px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.small};
    line-height: ${({ theme }) => theme.lineHight.regularSmall};
    color: ${({ theme }) => theme.colors.darkGray};
  }

  @media only screen and (${({ theme }) => theme.media.tablet}) {
    h2 {
      font-size: ${({ theme }) => theme.fontSize.titleTablet};
      line-height: ${({ theme }) => theme.lineHight.titleTablet};
    }

    .book-info__author {
      font-size: ${({ theme }) => theme.fontSize.regular};
      line-height: ${({ theme }) => theme.lineHight.regularBig};
    }

    .book-info__rating {
      flex-direction: column;
      align-items: flex-start;
      margin-top: 21px;
    }

    svg {
      height: 29px;
      width: 43px;
    }

    .groop-stars {
      margin-top: 17px;
    }
  }

  @media only screen and (${({ theme }) => theme.media.medium}) {
    max-width: 290px;
    margin-left: 310px;
    margin-top: -495px;
    height: 483px;

    svg {
      height: 33px;
      width: 48px;
    }

    .groop-stars {
      margin-top: 17px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .rate-this-book__text {
      margin: 0;
    }

    .rate-this-book {
      margin: 10px 0 0 0;
    }

    .rate-this-book__img {
      display: none;
    }
  }

  @media only screen and (${({ theme }) => theme.media.small}) {
    max-width: 290px;
    margin-left: 215px;
    margin-top: -290px;
    height: 275px;

    h2 {
      font-size: ${({ theme }) => theme.fontSize.author};
      line-height: ${({ theme }) => theme.lineHight.author};
    }

    .book-info__author {
      font-size: ${({ theme }) => theme.fontSize.small};
      line-height: ${({ theme }) => theme.lineHight.small};
    }

    svg {
      height: 25px;
      width: 33px;
    }
  }
  @media only screen and (${({ theme }) => theme.media.mobile}) {
    max-width: 145px;
    margin-left: 145px;
    margin-top: -210px;
    height: 202px;

    h2 {
      font-size: ${({ theme }) => theme.fontSize.filter};
      line-height: ${({ theme }) => theme.lineHight.small};
    }

    .book-info__author {
      margin-top: 14px;
      font-size: ${({ theme }) => theme.fontSize.commentDescription};
      line-height: ${({ theme }) => theme.lineHight.commentDescription};
    }

    svg {
      height: 17px;
      width: 21px;
    }

    .rating__container {
      max-height: 18px;
    }

    .rating__text {
      margin-left: 7px;
      font-size: ${({ theme }) => theme.fontSize.commentDescription};
      line-height: ${({ theme }) => theme.lineHight.commentDescription};
    }

    .rate-this-book__text {
      font-size: ${({ theme }) => theme.fontSize.commentDescription};
      line-height: ${({ theme }) => theme.lineHight.commentDescription};
    }
  }
`;
