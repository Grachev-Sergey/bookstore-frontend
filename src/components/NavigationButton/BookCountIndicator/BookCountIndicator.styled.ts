import styled from 'styled-components';

export const BookCountIndicatorContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 23px;
  width: 23px;
  top: -10px;
  right: 22px;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 50%;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.commentDescription};
  line-height: ${({ theme }) => theme.lineHight.commentDescription};
  color: ${({ theme }) => theme.colors.darkBlue};
  @media only screen and (${({ theme }) => theme.media.mobile}) {
    height: 16px;
    width: 16px;
    top: -5px;
    right: 12px;
    font-size: ${({ theme }) => theme.fontSize.bookStatusMobile};
  line-height: ${({ theme }) => theme.lineHight.bookStatus};
  }
`;
