import styled from 'styled-components';
import books from '../../assets/images/books.png';

export const BannerContainer = styled.section`
  display: flex;
  margin-top: 40px;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  h2 {
    margin: 80px 0 0 108px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.title};
    line-height: ${({ theme }) => theme.lineHight.title};
    color: ${({ theme }) => theme.colors.dark};
  }
  p {
    max-width: 217px;;
    margin: 10px 0 0 108px;
    text-align: start;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: ${({ theme }) => theme.fontSize.regular};
    line-height: ${({ theme }) => theme.lineHight.regularBig};
    color: ${({ theme }) => theme.colors.darkBlue};
  }
  .banner_button {
    margin: 50px 0 0 108px;
    max-width: 230px;
  }
  img {
    margin-left: 146px;
  }

  background-image: url(${books});
  background-repeat: no-repeat;
  background-position: bottom left;
`;
