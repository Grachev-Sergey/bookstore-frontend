import styled from 'styled-components';
import fairy from '../../assets/images/fairy.png';
import fairy2 from '../../assets/images/fairy2.png';
import fairy3 from '../../assets/images/fairy3.png';

export const AuthorizeBannerContainer = styled.section`
  position: relative;
  max-width: 1280px;
  margin: 100px auto 150px auto;
  display: flex;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-image: url(${fairy});
  background-repeat: no-repeat;
  background-position: bottom right;

  .banner__info {
    margin: 80px 0 0 757px;
  }

  h2 {
    text-align: start;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.title};
    line-height: ${({ theme }) => theme.lineHight.title};
    color: ${({ theme }) => theme.colors.dark};
  }
  p {
    max-width: 415px;
    margin: 10px 0 0 0;
    text-align: start;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: ${({ theme }) => theme.fontSize.regular};
    line-height: ${({ theme }) => theme.lineHight.regularBig};
    color: ${({ theme }) => theme.colors.dark};
  }

  .banner__button {
    display: block;
    margin: 50px 0 96px 0;
    max-width: 231px;
    padding: 10px 56px;
  }

  img {
    position: absolute;
    bottom: 0;
    left: 108px;
  }

  @media only screen and (${({ theme }) => theme.media.tablet}) {
    max-width: 804px;
    margin-top: 45px;
    background-image: url(${fairy2});

    .banner__info {
      margin: 80px 0 0 411px;
    }

    h2 {
      font-size: ${({ theme }) => theme.fontSize.titleTablet};
      line-height: ${({ theme }) => theme.lineHight.titleTablet};
    }

    p {
      text-align: start;
      font-size: ${({ theme }) => theme.fontSize.small};
      line-height: ${({ theme }) => theme.lineHight.regularSmall};
    }

    .banner__button {
      margin: 40px 0 120px 0;
    }

    img {
      max-width: 389px;
      left: 0;
      bottom: 0;
    }
  }

  @media only screen and (${({ theme }) => theme.media.medium}) {
    max-width: 580px;
    margin-top: 39px;
    background-image: url(${fairy3});
    background-position: top right;
    background-size: 350px;

    .banner__info {
      margin: 20px 0 0 20px;
    }

    p {
      margin: 20px 0 0 0;
      max-width: 280px;
    }

    .banner__button {
      margin: 20px 0 423px 0;
    }
  }

  @media only screen and (${({ theme }) => theme.media.small}) {
    max-width: 430px;
    background-size: 265px;

  }

  @media only screen and (${({ theme }) => theme.media.mobile}) {
    max-width: 290px;
    background-size: 200px;

    h2 {
      font-size: ${({ theme }) => theme.fontSize.filter};
      line-height: ${({ theme }) => theme.lineHight.regular};
    }

    p {
      max-width: 249px;
      font-size: ${({ theme }) => theme.fontSize.imputTitle};
      line-height: ${({ theme }) => theme.lineHight.small};
    }

    .banner__button {
      margin: 20px 0 328px 0;
      max-width: 231px;
      font-size: ${({ theme }) => theme.fontSize.small};
      line-height: ${({ theme }) => theme.lineHight.regularSmall};
    }

    img {
      margin-right: 19px;
      max-width: 282px;
      background-size: 253px;
    }
  }
`;
