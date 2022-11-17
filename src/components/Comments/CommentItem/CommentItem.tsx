import { useEffect, useState } from 'react';
// import dayjs from 'dayjs';
import moment from 'moment';
import { toast } from 'react-toastify';

import { CommentItemContainer } from './CommentItem.styles';
import userApi from '../../../api/userApi';

import userProfile from '../../../assets/icons/userProfile.png';

type PropsType = {
  userId: number;
  date: Date;
  text: string;
};

const CommentItem: React.FC<PropsType> = ({ userId, date, text }) => {
  const [userName, setUserName] = useState('Anonim');
  const [userAvatar, setUserAvatar] = useState('');

  // dayjs.extend();

  useEffect(() => {
    (async () => {
      try {
        const user = await userApi.genUserById(userId);
        if (user.data.user?.fullName) {
          setUserName(user.data.user.fullName);
        }
        if (user.data.user?.avatar) {
          setUserAvatar(user.data.user?.avatar);
        }
      } catch (err) {
        const error = err as Error;
        return toast.error(error.message);
      }
    })();
  }, [userId]);

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
