import { useState } from 'react';
// import dayjs from 'dayjs';
import moment from 'moment';

import { CommentItemContainer } from './CommentItem.styles';

import type { UserType } from '../../../utils/types/userTypes';

import userProfile from '../../../assets/icons/userProfile.png';

type PropsType = {
  user: UserType;
  date: Date;
  text: string;
};

const CommentItem: React.FC<PropsType> = ({ user, date, text }) => {
  const [userName] = useState(user.fullName || 'Anonim');
  const [userAvatar] = useState(user.avatar || '');

  // dayjs.extend();

  return (
    <CommentItemContainer>
      <div className="user-info">
        <img className="user-info__photo" src={userAvatar ? `${userAvatar}` : `${userProfile}`} />
        <div className="user-info__text">
          <p className="user-info__name">{userName}</p>
      {/* <p className="user-info__comment-date">{`Left a comment ${dayjs(date).fromNow()}`}</p> */}
          <p className="user-info__comment-date">{`Left a comment ${moment(date).fromNow()}`}</p>
        </div>
      </div>
      <p className="comment-text">{text}</p>
    </CommentItemContainer>
  );
};

export default CommentItem;
