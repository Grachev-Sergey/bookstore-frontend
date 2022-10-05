import styled from 'styled-components';

export const StyledButton = styled.section`
  padding: 10px 50px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.light};
  background: ${({ theme }) => theme.colors.darkBlue};
  border-radius: 16px;
`;
