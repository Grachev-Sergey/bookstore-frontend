import styled from 'styled-components';

export const PriceFilterContainer = styled.div`
  position: absolute;
  margin-top: 75px;
  padding: 40px 15px;
  top: 0;
  min-width: 413px;
  background: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  text-align: start;
  z-index: 1;

  .polygon {
    position: absolute;
    top: -13px;
    left: 15px;
  }

  .prise-info {
    display: flex;
    justify-content: space-between;
    margin-top: 37px;
    font-weight: 400;
    font-size: 16px;
    line-height: 34px;
    letter-spacing: 0.75px;
  }

  .example-thumb{
    height: 32px;
    width: 32px;
    color: #fff;
    border-radius: 50%;
    cursor: grab;
    font-size: 0;
    background-color: white;
    border: solid 2px #BFCC94;
    :focus{
      outline: none;
    }
  }
  
  .example-track{
    top: 8px;
    height: 12px;
    border-radius: 40px;
  }

  .example-track-1 {
    background: #BFCC94; 
  }

  .example-track-0 {
     background: #D6D8E7; 
  } 

  .example-track-2{ 
    background: #D6D8E7; 
  }


  @media only screen and (${({ theme }) => theme.media.tablet}) {
    min-width: 290px;
  }

  @media only screen and (${({ theme }) => theme.media.medium}) {
    min-width: 580px;
    .polygon {
      top: -18px;
    }
  }

  @media only screen and (${({ theme }) => theme.media.small}) {
    min-width: 430px;
  }

  @media only screen and (${({ theme }) => theme.media.mobile}) {
    min-width: 290px;
  }
`;
