import styled from 'styled-components';

export const CommentItemContainer = styled.section`
  max-height: 187px;
  display: flex;
  background: #F0F4EF;
  border-radius: 16px;
  margin-top: 10px;
  
  .comment-photo {
    height: 60px;
    width: 60px;
    margin: 30px 0 0 30px;
    border-radius: 50px;
  }

  .comment-info {
    margin: 35px 0 25px 20px;
    text-align: start;
  }

  .comment-info__user-name {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.75px;
    /* dark */
    color: #0D1821;
  }

  .comment-info__date {
    margin-top: 4px;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.75px;
    /* dark_grey */
    color: #B9BAC4;
  }

  .comment-info__text {
    margin-top: 9px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.75px;
    /* dark blue */
    color: #344966;
  }
`;
