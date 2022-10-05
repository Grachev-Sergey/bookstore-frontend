import styled from 'styled-components';

export const CatalogContainer = styled.section`
  margin: 110px 0 100px;
  h2 {
    text-align: start;
    font-weight: ${({ theme }) => theme.fontWeight.title};
    font-size: ${({ theme }) => theme.fontSize.title};
    line-height: ${({ theme }) => theme.lineHight.title};
    color: ${({ theme }) => theme.colors.dark};
  }
`;
