import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 10px 50px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.small};
  line-height: ${({ theme }) => theme.lineHight.regularSmall};
  color: ${({ theme }) => theme.colors.light};
  background: ${({ theme }) => theme.colors.darkBlue};
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  border: none;

  @media only screen and (${({ theme }) => theme.media.mobile}) {
    padding: 10px 17px;
    font-size: ${({ theme }) => theme.fontSize.commentDescription};
    line-height: ${({ theme }) => theme.lineHight.commentDescription};
  }
`;
