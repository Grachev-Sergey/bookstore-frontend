import styled from 'styled-components';

export const CartPageContainer = styled.section`
  max-width: 1280px;
  margin: 60px auto 114px auto;
  text-align: start;

  .total-price {
    margin-top: 50px;
    display: flex;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: ${({ theme }) => theme.fontSize.bigPrice};
    line-height: ${({ theme }) => theme.lineHight.bigPrice};
    color: ${({ theme }) => theme.colors.dark};
  }

  .total-price__price {
    margin-left: 5px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }

  .buttons-block {
    margin-top: 30px;
  }

  .buttons-block__continue-shopping {
    background-color: #fff;
    border: black solid 1px;
    color: ${({ theme }) => theme.colors.dark};
  }

  .buttons-block__chekout {
    margin-left: 25px;
    border: solid 1px;
  }

  @media only screen and (${({ theme }) => theme.media.tablet}) {
    max-width: 804px;
    margin: 60px auto 104px auto;
  }

  @media only screen and (${({ theme }) => theme.media.medium}) {
    max-width: 580px;
    margin: 60px auto 100px auto;

    .total-price {
      margin-top: 70px;
    }

    .buttons-block {
      margin-top: 30px;
    }

    .button {
      min-width: 580px
    }

    .buttons-block__chekout {
      margin-left: 0;
      margin-top: 20px;
    }
  }

  @media only screen and (${({ theme }) => theme.media.small}) {
    max-width: 430px;

    .button {
      min-width: 430px;
    }
  }

  @media only screen and (${({ theme }) => theme.media.mobile}) {
    max-width: 290px;
    margin-top: 50px;

    .total-price {
      font-size: ${({ theme }) => theme.fontSize.author};
      line-height: ${({ theme }) => theme.lineHight.author};
    }

    .button {
      min-width: 290px;
    }
  }
`;
