import styled from 'styled-components';

export const FilerBlockContainer = styled.div`
  display: flex;

  @media only screen and (${({ theme }) => theme.media.medium}) {
    flex-wrap: wrap;
    margin-bottom: 10px;
  }
`;
