import styled from 'styled-components';

export const BookPageContainer = styled.section`
  margin-top: 60px;
  .addToCartButton--gray {
    background: ${({ theme }) => theme.colors.darkGray};
  }
`;
