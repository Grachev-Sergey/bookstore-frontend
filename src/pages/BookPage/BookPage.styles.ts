import styled from 'styled-components';

export const BookPageContainer = styled.section`
  margin: 60px auto 0 auto;
  max-width: 1280px;

  h2 {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.title};
    line-height: ${({ theme }) => theme.lineHight.title};
    color: ${({ theme }) => theme.colors.dark};
  }

  .book-block {
    display: flex;
  }

  .cover {
    position: relative;
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
    margin-left: 128px;
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
    margin: 0 30px 0 14px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.small};
    line-height: ${({ theme }) => theme.lineHight.regularSmall};
    color: ${({ theme }) => theme.colors.darkGray};
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
  
  .description__title{
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

  .add-to-cart__button--gray {
    background: ${({ theme }) => theme.colors.darkGray};
  }
`;
