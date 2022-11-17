import styled from 'styled-components';

export const CommentItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #F0F4EF;
  border-radius: 16px;
  margin-top: 10px;
  
  .user-info {
    display: flex;
  }

  .user-info__photo {
    height: 60px;
    width: 60px;
    margin: 30px 0 0 30px;
    border-radius: 50px;
  }

  .user-info__text {
    margin: 35px 0 0 20px;
  }

  .user-info__name {
    text-align: start;
    font-weight: 600;
    letter-spacing: 0.75px;
    font-size: ${({ theme }) => theme.fontSize.small};
    line-height: ${({ theme }) => theme.lineHight.regularSmall};
    color: ${({ theme }) => theme.colors.dark};
  }

  .user-info__comment-date {
    margin-top: 4px;
    letter-spacing: 0.75px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.commentDescription};
    line-height: ${({ theme }) => theme.lineHight.commentDescription};
    color: ${({ theme }) => theme.colors.darkGray};
  }

  .comment-text {
    text-align: start;
    margin: 0 10px 20px 110px;
    letter-spacing: 0.75px;
    overflow-wrap: break-word;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.small};
    line-height: ${({ theme }) => theme.lineHight.regularSmall};
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  @media only screen and (${({ theme }) => theme.media.tablet}) {
    .user-info__photo {
      margin: 20px 0 0 20px;
    }

    .user-info__text {
      margin: 25px 0 0 20px;
    }

    .comment-text {
      margin: 11px 0 20px 100px;
    }
  }

  @media only screen and (${({ theme }) => theme.media.medium}) {
    .comment-text {
      margin: 11px 0 20px 103px;
    }
  }

  @media only screen and (${({ theme }) => theme.media.small}) {
    .user-info__photo {
      height: 35px;
      width: 35px;
      margin: 13px 0 0 10px;
    }

    .user-info__text {
      margin: 12px 0 0 13px;
    }

    .user-info__name {
      font-size: ${({ theme }) => theme.fontSize.imputTitle};
      line-height: ${({ theme }) => theme.lineHight.small};
    }

    .user-info__comment-date {
      margin-top: 0;
      font-size: ${({ theme }) => theme.fontSize.bookStatusMobile};
      line-height: ${({ theme }) => theme.lineHight.commentDescription};
    }

    .comment-text {
      margin: 15px 0 10px 10px;
      font-size: ${({ theme }) => theme.fontSize.commentDescription};
      line-height: ${({ theme }) => theme.lineHight.commentDescription};
    }
  }

`;
