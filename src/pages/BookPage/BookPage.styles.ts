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
    flex-wrap: wrap;
  }

  .cover {
    position: absolute;
  }

  .picture {
    width: 522px;
    height: 779px;
  }

  .favorite-button {
    position: absolute;
    width: 58px;
    height: 58px;
    right: 30px;
    top: 30px;
    cursor: pointer;
  }

  .book-info {
    margin-left: 650px;
    text-align: start;
  }

  .book-info__author {
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.autor};
    line-height: ${({ theme }) => theme.lineHight.author};
    color: ${({ theme }) => theme.colors.dark};
  }

  .book-info__rating {
    margin-top: 30px;
    display: flex;
    align-items: center;
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

  svg {
    height: 33px;
    width: 45.5px;
    path{
        stroke: #BFCC94;
        stroke-width: 1;
    }
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

  .description-and-add-to-cart {
    margin-left: 650px;
    text-align: start;
  }
  
  .description__title {
    margin-top: 30px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.autor};
    line-height: ${({ theme }) => theme.lineHight.author};
    color: ${({ theme }) => theme.colors.dark};
  }

  .description__text {
    margin-top: 10px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.small};
    line-height: ${({ theme }) => theme.lineHight.regularSmall};
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  .add-to-cart {
    margin-top: 74px;
    display: flex;
  }

  .cover-selection__title {
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.small};
    line-height: ${({ theme }) => theme.lineHight.regularSmall};
    color: ${({ theme }) => theme.colors.dark};
  }

  .add-to-cart__button {
    margin-top: 14px;
    letter-spacing: 0.75px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.regular};
    line-height: ${({ theme }) => theme.lineHight.regularBig};
    color: ${({ theme }) => theme.colors.light};
  }

  .cover-selection--hardcover {
    margin-left: 82px;
  }

  .comments {
    margin-top: 231px;
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

  .add-to-cart__button--gray {
    background: ${({ theme }) => theme.colors.darkGray};
  }

  .add-to-cart__button--added {
    background-color: #fff;
    border: black solid 1px;
    color: ${({ theme }) => theme.colors.dark};
  }

  @media only screen and (${({ theme }) => theme.media.tablet}) {
    max-width: 804px;

    h2 {
      font-size: ${({ theme }) => theme.fontSize.titleTablet};
      line-height: ${({ theme }) => theme.lineHight.titleTablet};
    }

    .picture {
      width: 391px;
      height: 584px;
    }

    .favorite-button {
      width: 48px;
      height: 48px;
    }

    .book-info {
      margin-left: 412px;
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
      height: 25px;
      width: 25px;
    }

    .groop-stars {
      margin-top: 17px;
    }

    .description-and-add-to-cart {
      margin-left: 412px;
    }

    .description__title {
      font-size: ${({ theme }) => theme.fontSize.regular};
      line-height: ${({ theme }) => theme.lineHight.regularBig};
    }

    .description__text {
      margin-top: 22px;
      font-size: ${({ theme }) => theme.fontSize.imputTitle};
      line-height: ${({ theme }) => theme.lineHight.small};
    }

    .add-to-cart {
      margin-top: 50px;
    }

    .add-to-cart__button {
      padding: 10px 22px;
      min-width: 184px;
    }

    .cover-selection--hardcover {
      margin-left: 20px;
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
    flex-wrap: wrap;
    

    .book-block {
      align-items: flex-start;
    }

    .cover {
      position: relative;
    }

    .book-info {
      margin-left: 20px;
      max-width: 270px;
    }

    .picture {
      width: 290px;
      height: 483px;
    }

    .description-and-add-to-cart {
      margin-left: 0;
      text-align: start;
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

    .description__title {
      margin-top: 20px;
    }

    .add-to-cart {
      margin-top: 30px;
      justify-content: space-between;
    }
  }

  @media only screen and (${({ theme }) => theme.media.small}) {
    max-width: 430px;

    .favorite-button {
      width: 35px;
      height: 35px;
      right: 19px;
      top: 16px;
    }

    .book-info {
      margin-left: 20px;
      max-width: 210px;
    }

    .picture {
      width: 190px;
      height: 275px;
    }

    .description-and-add-to-cart {
      margin-left: 0;
      text-align: start;
    }

    h2 {
      font-size: ${({ theme }) => theme.fontSize.autor};
      line-height: ${({ theme }) => theme.lineHight.author};
    }

    .book-info__author {
      font-size: ${({ theme }) => theme.fontSize.small};
      line-height: ${({ theme }) => theme.lineHight.small};
    }

    .add-to-cart__button {
      font-size: ${({ theme }) => theme.fontSize.small};
      line-height: ${({ theme }) => theme.lineHight.small};
    }
  }

  @media only screen and (${({ theme }) => theme.media.mobile}) {
    max-width: 290px;

    .favorite-button {
      width: 25px;
      height: 25px;
    }

   .picture {
      width: 135px;
      height: 202px;
    }

    .book-info {
      margin-left: 20px;
      max-width: 135px;
    }

    h2 {
      font-size: ${({ theme }) => theme.fontSize.filter};
      line-height: ${({ theme }) => theme.lineHight.small};
    }

    .book-info__author {
      margin-top: 14px;
      font-size: ${({ theme }) => theme.fontSize.commentDescription};
      line-height: ${({ theme }) => theme.lineHight.commentDescription};
    }


    .rating__container {
      max-height: 18px;
    }

    svg {
      height: 18px;
      width: 18px;
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

    .description__title {
      font-size: ${({ theme }) => theme.fontSize.imputTitle};
      line-height: ${({ theme }) => theme.lineHight.small};
    }

    .description__text {
      margin-top: 15px;
      font-size: ${({ theme }) => theme.fontSize.commentDescription};
      line-height: ${({ theme }) => theme.lineHight.commentDescription};
    }

    .cover-selection__title {
      font-size: ${({ theme }) => theme.fontSize.imputTitle};
      line-height: ${({ theme }) => theme.lineHight.small};
    }

    .add-to-cart__button {
      min-width: 135px;
      padding: 10px 12px;
      font-size: ${({ theme }) => theme.fontSize.commentDescription};
      line-height: ${({ theme }) => theme.lineHight.commentDescription};
    }

    .comments {
      margin-top: 30px;
    }

    .recommendations {
      margin-top: 60px;
    }
  }
`;
