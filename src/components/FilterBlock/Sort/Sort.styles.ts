import styled from 'styled-components';

export const SortContainer = styled.section`
  position: absolute;
  margin-top: 75px;
  padding: 15px;
  top: 0;
  min-width: 197px;
  background: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  text-align: start;
  z-index: 1;

  .polygon {
    position: absolute;
    top: -13px;
    left: 15px;
  }

  .sort-item {
    padding: 12px;
    text-align: start;
    font-size: ${({ theme }) => theme.fontSize.small};
    line-height: ${({ theme }) => theme.lineHight.regular};
    cursor: pointer;
  }

  @media only screen and (${({ theme }) => theme.media.tablet}) {
    min-width: 290px;
  }

  @media only screen and (${({ theme }) => theme.media.medium}) {
    min-width: 580px;
  }

  @media only screen and (${({ theme }) => theme.media.small}) {
    min-width: 430px;
  }

  @media only screen and (${({ theme }) => theme.media.mobile}) {
    min-width: 290px;

    .sort-item {
      font-size: ${({ theme }) => theme.fontSize.imputTitle};
    }
  }
`;
