import styled from 'styled-components';

export const CartItemContainer = styled.div`
  display: flex;
  :not(:last-child) {
    padding-bottom: 40px;
    margin-bottom: 40px;
    border-bottom: 1px solid #D6D8E7;
  }

  a {
    text-decoration: none;
  }
 
  .book-cover {
    width: 197px;
    height: 289px;
  }

  .cart-item-info {
    margin-left: 20px;
  }

  .cart-item-info__book-title {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.title};
    line-height: ${({ theme }) => theme.lineHight.title};
    color: ${({ theme }) => theme.colors.dark};
  }

  .cart-item-info__book-author {
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: ${({ theme }) => theme.fontSize.author};
    line-height: ${({ theme }) => theme.lineHight.author};
    color: ${({ theme }) => theme.colors.dark};
  }

  .cart-item-info__book-cover-type {
    font-size: ${({ theme }) => theme.fontSize.commentDescription};
    line-height: ${({ theme }) => theme.lineHight.commentDescription};
    color: ${({ theme }) => theme.colors.darkGray};
  }

  .counter-block {
    display: flex;
    margin-top: 32px;
    align-items: center;
  }

  .counter-block__button {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: none;
    background: ${({ theme }) => theme.colors.light};
    font-weight: 600;
    letter-spacing: 0.75px;
    font-size: ${({ theme }) => theme.fontSize.small};
    line-height: ${({ theme }) => theme.lineHight.regularBig};
    color: ${({ theme }) => theme.colors.dark};
  }

  .counter-block__counter {
    margin: 0 20px;
    font-weight: 600;
    letter-spacing: 0.75px;
    font-size: ${({ theme }) => theme.fontSize.small};
    line-height: ${({ theme }) => theme.lineHight.regularBig};
    color: ${({ theme }) => theme.colors.dark};
  }

  .counter-block__trash-can {
    width: 20px;
    height: 20px;
    margin-left: 58px;
    cursor: pointer;
  }

  .cart-item-info__price {
    margin-top: 50px;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: ${({ theme }) => theme.fontSize.bigPrice};
    line-height: ${({ theme }) => theme.lineHight.bigPrice};
    color: ${({ theme }) => theme.colors.dark};
  }

  @media only screen and (${({ theme }) => theme.media.tablet}) {
    max-width: 804px;

    .book-cover {
      width: 255px;
      height: 375px;
    }

    .cart-item-info {
      margin-left: 17px;
    }

    .cart-item-info__book-title {
      font-size: ${({ theme }) => theme.fontSize.titleTablet};
      line-height: ${({ theme }) => theme.lineHight.titleTablet};
    }

    .cart-item-info__book-author {
      font-size: ${({ theme }) => theme.fontSize.regular};
      line-height: ${({ theme }) => theme.lineHight.regularBig};
    }
  }

  @media only screen and (${({ theme }) => theme.media.medium}) {
    max-width: 580px;

    .book-cover {
      width: 255px;
      height: 375px;
    }

    .cart-item-info {
      margin-left: 17px;
    }

    .cart-item-info__book-title {
      font-size: ${({ theme }) => theme.fontSize.titleTablet};
      line-height: ${({ theme }) => theme.lineHight.titleTablet};
    }

    .cart-item-info__book-author {
      font-size: ${({ theme }) => theme.fontSize.regular};
      line-height: ${({ theme }) => theme.lineHight.regularBig};
    }
  }

  @media only screen and (${({ theme }) => theme.media.small}) {
    max-width: 430px;
    :not(:last-child) {
      padding-bottom: 30px;
      margin-bottom: 30px;
    }
    
    .book-cover {
      width: 197px;
      height: 289px;
    }

    .cart-item-info {
      margin-left: 20px;
    }

    .cart-item-info__book-title {
      font-size: ${({ theme }) => theme.fontSize.author};
      line-height: ${({ theme }) => theme.lineHight.author};
    }

    .cart-item-info__book-author {
      font-size: ${({ theme }) => theme.fontSize.small};
      line-height: ${({ theme }) => theme.lineHight.small};
    }

    .cart-item-info__book-cover-type {
      font-size: ${({ theme }) => theme.fontSize.bookStatusMobile};
      line-height: ${({ theme }) => theme.lineHight.bookStatus};
    }

    .counter-block__button {
      font-size: ${({ theme }) => theme.fontSize.imputTitle};
      line-height: ${({ theme }) => theme.lineHight.regularBig};
    }

    .counter-block__counter {
      margin: 0 15px;
      font-size: ${({ theme }) => theme.fontSize.imputTitle};
      line-height: ${({ theme }) => theme.lineHight.regularBig};
    }

    .counter-block__trash-can {
      width: 18px;
      height: 18px;
      margin-left: 24px;
    }

    .cart-item-info__price {
      margin-top: 44px;
      font-size: ${({ theme }) => theme.fontSize.author};
      line-height: ${({ theme }) => theme.lineHight.author};
    }

  }

  @media only screen and (${({ theme }) => theme.media.mobile}) {
    max-width: 290px;

    .book-cover {
      width: 135px;
      height: 202px;
    }

    .cart-item-info {
      position: relative;
    }

    .cart-item-info__book-title {
      font-size: ${({ theme }) => theme.fontSize.filter};
      line-height: ${({ theme }) => theme.lineHight.small};
    }

    .cart-item-info__book-author {
      margin-top: 14px;
      font-size: ${({ theme }) => theme.fontSize.commentDescription};
      line-height: ${({ theme }) => theme.lineHight.commentDescription};
    }

    .counter-block {
      margin-top: 17px;
    }

    .cart-item-info__price {
      margin-top: 0;
      position: absolute;
      bottom: 0;
      font-size: ${({ theme }) => theme.fontSize.filter};
      line-height: ${({ theme }) => theme.lineHight.regular};
    }
  }
`;
