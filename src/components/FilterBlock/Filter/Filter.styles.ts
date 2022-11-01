import styled from 'styled-components';

export const FilterContainer = styled.div`
  position: relative;
  max-height: 48px;
  min-width: 196px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.colors.light};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.filter};
  line-height: ${({ theme }) => theme.lineHight.regular};
  letter-spacing: 0.75px;

  :not(:first-child) {
    margin-left: 20px;
  }

  .filterButton {
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
  }
  .forward {
    width: 24px;
    height: 24px;
  }

  @media only screen and (${({ theme }) => theme.media.tablet}) {
    min-width: 255px;
    font-size: ${({ theme }) => theme.fontSize.small};
  }

  @media only screen and (${({ theme }) => theme.media.medium}) {
    min-width: 580px;
    :not(:first-child) {
      margin-left: 0;
    }
    :not(:last-child) {
      margin-bottom: 20px;
    }
  }

  @media only screen and (${({ theme }) => theme.media.small}) {
    min-width: 430px;
  }

  @media only screen and (${({ theme }) => theme.media.mobile}) {
    min-width: 290px;
    font-size: ${({ theme }) => theme.fontSize.imputTitle};
  }
`;
