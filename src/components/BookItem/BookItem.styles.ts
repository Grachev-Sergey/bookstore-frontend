import styled from 'styled-components';

export const BookContainer = styled.div`
  max-width: 305px;
  margin: 0 15px 80px 0;

  .book__cover {
    position: relative;
    max-width: 305px;
    max-height: 448px;
  }

  .book-cover {
    height: 448px;
  }

  img {
    width: 100%;
  }

  .favorite-button {
    position: absolute;
    width: 48px;
    height: 48px;
    left: 20px;
    top: 20px;
    cursor: pointer;
  }

  .book__status {
    position: absolute;
    bottom: 23px;
    left: 20px;
    padding: 10px 50px;
    border-radius: ${({ theme }) => theme.borderRadius};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.imputTitle};
    line-height: ${({ theme }) => theme.lineHight.bookStatus};
    letter-spacing: 0.75px;
    font-style: italic;
  }

  .book__status--Bestseller {
    background: ${({ theme }) => theme.colors.darkBlue};
    color: ${({ theme }) => theme.colors.light};
  }

  .book__status--New {
    background: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.dark};
  }

  .book__title {
    display: block;
    margin-top: 30px;
    text-align: start;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.regular};
    line-height: ${({ theme }) => theme.lineHight.regularBig};
    color: ${({ theme }) => theme.colors.darkBlue};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .book__author {
    display: block;
    text-align: start;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.regular};
    line-height: ${({ theme }) => theme.lineHight.regularBig};
    color: ${({ theme }) => theme.colors.darkGray};
  }

  .rating {
    margin: 20px 0 30px 0;
  }

  .add-to-cart-button{
    width: 100%;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.regular};
    line-height: ${({ theme }) => theme.lineHight.regular};
    letter-spacing: 0.75px;
    color: ${({ theme }) => theme.colors.light};
  }

  @media only screen and (${({ theme }) => theme.media.tablet}) {
    max-width: 254px;
    max-height: 372px;
    margin: 0 10.5px 30px 0;

    .book__cover {
      position: relative;
      max-width: 254px;
    }

    .book-cover {
      height: 372px;
    }

    .favoriteButton {
      position: absolute;
      width: 38px;
      height: 38px;
      left: 16px;
      top: 16px;
    }

    .book__title {
      margin-top: 30px;
      font-size: ${({ theme }) => theme.fontSize.small};
      line-height: ${({ theme }) => theme.lineHight.regularSmall};
    }

    .book__author {
      font-size: ${({ theme }) => theme.fontSize.small};
      line-height: ${({ theme }) => theme.lineHight.regularSmall};
    }

    .addToCartButton{
      font-size: ${({ theme }) => theme.fontSize.small};
    }

  }

  @media only screen and (${({ theme }) => theme.media.medium}) {
    max-width: 270px;

    margin: 0 20px 30px 0;

    .book__cover {
      max-width: 280px;
    }

    .book-cover {
      height: 286px;
    }
  }

  @media only screen and (${({ theme }) => theme.media.small}) {
    max-width: 195px;
    margin: 0 19px 30px 0;

    .book__cover {
      max-width: 195px;
    }

    .book__status {
      bottom: 11px;
      left: 11px;
      padding: 10px 60px;
      font-size: ${({ theme }) => theme.fontSize.bookStatusMobile};
    }

    .book__status--New {
      padding: 10px 75px;
    }

    .book__title {
      margin-top: 15px;
      font-size: ${({ theme }) => theme.fontSize.small};
      line-height: ${({ theme }) => theme.lineHight.regularSmall};
    }

    .rating {
      margin: 15px 0;
    }

    .addToCartButton{
      width: 100%;
      font-size: ${({ theme }) => theme.fontSize.imputTitle};
    }
  }

  @media only screen and (${({ theme }) => theme.media.mobile}) {
    max-width: 135px;
    margin: 0 10px 30px 0;

    .book__cover {
      position: relative;
      max-width: 135px;
    }

    .book-cover {
      height: 198px;
    }

    .favoriteButton {
      width: 25px;
      height: 25px;
      left: 19px;
      top: 16px;
    }

    .book__status {
      bottom: 11px;
      left: 11px;
      padding: 10px 29px;
      font-size: ${({ theme }) => theme.fontSize.bookStatusMobile};
    }

    .book__status--New {
      padding: 10px 44px;
    }

    .book__title {
      font-size: ${({ theme }) => theme.fontSize.imputTitle};
      line-height: ${({ theme }) => theme.lineHight.small};
    }

    .book__author {
      font-size: ${({ theme }) => theme.fontSize.imputTitle};
      line-height: ${({ theme }) => theme.lineHight.small};
    }

    .addToCartButton{
      padding: 3px 21px;
      font-size: ${({ theme }) => theme.fontSize.imputTitle};
      line-height: ${({ theme }) => theme.lineHight.regular};
    }
  }
`;
