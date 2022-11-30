import styled from 'styled-components';

export const BookDescriptionContainer = styled.div`
  .description-and-add-to-cart {
    text-align: start;
  }
  
  .description__title {
    margin-top: 30px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.author};
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

  .add-to-cart__button {
    margin-top: 14px;
    letter-spacing: 0.75px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.regular};
    line-height: ${({ theme }) => theme.lineHight.regularBig};
    color: ${({ theme }) => theme.colors.light};
  }

  .add-to-cart__button--gray {
    background: ${({ theme }) => theme.colors.darkGray};
  }

  .add-to-cart__button--added {
    background-color: #fff;
    border: black solid 1px;
    color: ${({ theme }) => theme.colors.dark};
  }

  .cover-selection__title {
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.small};
    line-height: ${({ theme }) => theme.lineHight.regularSmall};
    color: ${({ theme }) => theme.colors.dark};
  }

  .cover-selection--hardcover {
    margin-left: 82px;
  }

  @media only screen and (${({ theme }) => theme.media.tablet}) {
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
      padding: 10px 19px;
      min-width: 184px;
    }

    .cover-selection--hardcover {
      margin-left: 20px;
    }
  }

  @media only screen and (${({ theme }) => theme.media.medium}) {
    .description-and-add-to-cart {
      margin-left: 0;
      text-align: start;
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
    .description-and-add-to-cart {
      margin-left: 0;
      text-align: start;
    }
    .add-to-cart__button {
      font-size: ${({ theme }) => theme.fontSize.small};
      line-height: ${({ theme }) => theme.lineHight.small};
    }
  }

  @media only screen and (${({ theme }) => theme.media.mobile}) {
    .description__title {
      font-size: ${({ theme }) => theme.fontSize.imputTitle};
      line-height: ${({ theme }) => theme.lineHight.small};
    }

    .description__text {
      margin-top: 15px;
      font-size: ${({ theme }) => theme.fontSize.commentDescription};
      line-height: ${({ theme }) => theme.lineHight.commentDescription};
    }

    .add-to-cart__button {
      min-width: 135px;
      padding: 10px 12px;
      font-size: ${({ theme }) => theme.fontSize.commentDescription};
      line-height: ${({ theme }) => theme.lineHight.commentDescription};
    }

    .cover-selection__title {
      font-size: ${({ theme }) => theme.fontSize.imputTitle};
      line-height: ${({ theme }) => theme.lineHight.small};
    }
  }
`;
