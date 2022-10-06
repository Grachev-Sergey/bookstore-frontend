import styled from 'styled-components';
import books from '../../assets/images/books.png';
import books2 from '../../assets/images/books2.png';
import woman from '../../assets/images/woman.png';
import woman2 from '../../assets/images/woman2.png';

export const BannerContainer = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  margin-top: 40px;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-image: url(${books});
  background-repeat: no-repeat;
  background-position: bottom left;

  h2 {
    margin: 80px 0 0 108px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.title};
    line-height: ${({ theme }) => theme.lineHight.title};
    color: ${({ theme }) => theme.colors.dark};
  }
  p {
    max-width: 217px;
    margin: 10px 0 0 108px;
    text-align: start;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: ${({ theme }) => theme.fontSize.regular};
    line-height: ${({ theme }) => theme.lineHight.regularBig};
    color: ${({ theme }) => theme.colors.darkBlue};
  }
  .banner__button {
    padding: 10px 55px;
    margin: 50px 0 0 108px;
    display: block;
    text-align: start;
    max-width: 231px;
  }
  .img {
    margin-left: 146px;
    background-image: url(${woman});
    width: 406px;
    height: 400px;
  }

  @media only screen and (${({ theme }) => theme.media.tablet}) {
    max-width: 804px;
    margin-top: 45px;
    position: relative;

    h2 {
      margin: 45px 0 0 40px;
      font-size: ${({ theme }) => theme.fontSize.titleTablet};
      line-height: ${({ theme }) => theme.lineHight.titleTablet};
    }

    p {
      max-width: 200px;
      margin: 15px 0 0 40px;
      text-align: start;
      font-size: ${({ theme }) => theme.fontSize.small};
      line-height: ${({ theme }) => theme.lineHight.regularSmall};
    }

    .banner__button {
      margin: 40px 0 56px 40px;
    }

    .img {
      margin-right: 14px;
      max-width: 328px;
      height: 364px;
      width: 328px;
      background-image: url(${woman2});
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }

  @media only screen and (${({ theme }) => theme.media.medium}) {
    max-width: 580px;
    margin-top: 39px;
    background-image: url(${books2});
    background-position: top 17px right;
    background-size: 350px;

    .banner__button {
      margin: 40px 0 420px 40px;
    }
  }

  @media only screen and (${({ theme }) => theme.media.small}) {
    max-width: 430px;
    background-size: 265px;

    h2 {
      margin: 20px 0 0 40px;
      font-size: ${({ theme }) => theme.fontSize.autor};
      line-height: ${({ theme }) => theme.lineHight.regular};
    }
    p {
      max-width: 217px;
    }
  }

  @media only screen and (${({ theme }) => theme.media.mobile}) {
    max-width: 290px;
    background-size: 225px;

    h2 {
      margin: 20px 0 0 20px;
      font-size: ${({ theme }) => theme.fontSize.filter};
      line-height: ${({ theme }) => theme.lineHight.regular};
    }

    p {
      margin: 20px 0 0 20px;
      font-size: ${({ theme }) => theme.fontSize.imputTitle};
      line-height: ${({ theme }) => theme.lineHight.small};
    }

    .banner__button {
      padding: 10px 54px;
      margin: 20px 0 338px 20px;
      max-width: 200px;
    }

    .img {
      margin-right: 19px;
      max-width: 328px;
      height: 281px;
      width: 253px;
      background-size: 253px;
    }
  }
`;
