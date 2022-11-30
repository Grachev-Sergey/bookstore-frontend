import styled from 'styled-components';

export const ProfilePageContainer = styled.section`
  max-width: 1280px;
  margin: 60px auto 0 auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  padding-right: 305px;

  .profile-container {
    margin: 0 0 104px 128px;
    width: 100%;
    max-width: 522px;
  }
  
  .title-and-change-button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 30px;
    flex-wrap: wrap;
  }

  .profile-title {
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: ${({ theme }) => theme.fontSize.regular};
    line-height: ${({ theme }) => theme.lineHight.regularBig};
    color: ${({ theme }) => theme.colors.dark};
  }

  .change-button {
    font-size: ${({ theme }) => theme.fontSize.inputTitle};
    line-height: ${({ theme }) => theme.lineHight.small};
    color: ${({ theme }) => theme.colors.darkGreen};
    text-decoration-line: underline;
    cursor: pointer;
  }

  @media only screen and (${({ theme }) => theme.media.tablet}) {
    max-width: 804px;
    padding-right: 0;

    .profile-container {
      margin-left: 20px;
      width: 100%;
      max-width: 529px;
    }

    .title-and-change-button {
      margin-bottom: 20px;
    }

    .profile-title {
      font-size: ${({ theme }) => theme.fontSize.small};
      line-height: ${({ theme }) => theme.lineHight.regularSmall};
    }

    .change-button {
      font-size: ${({ theme }) => theme.fontSize.commentDescription};
      line-height: ${({ theme }) => theme.lineHight.commentDescription};
    }
  }
  
  @media only screen and (${({ theme }) => theme.media.medium}) {
    max-width: 590px;
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (${({ theme }) => theme.media.small}) {
    max-width: 430px;
    .profile-container {
      margin-left: 0;
    }
  }

  @media only screen and (${({ theme }) => theme.media.mobile}) {
    max-width: 290px;

    .profile-container {
      margin-bottom: 100px;
    }

    .title-and-change-button {
      margin-bottom: 10px;
    }

    .profile-title {
      margin: 0 20px 10px 0;
    }

    .profile-title {
      font-size: ${({ theme }) => theme.fontSize.small};
      line-height: ${({ theme }) => theme.lineHight.regularSmall};
    }

    .change-button {
      margin-bottom: 3px;
    }
  }
`;
