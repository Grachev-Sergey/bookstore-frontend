import { useEffect, useState } from 'react';
import moment from 'moment';
import { toast } from 'react-toastify';

import { CommentItemContainer } from './CommentItem.styles';
import { baseUrl } from '../../../utils/config';

import userApi from '../../../api/userApi';

type PropsType = {
  userId: number;
  date: Date;
  text: string;
};

const CommentItem: React.FC<PropsType> = ({ userId, date, text }) => {
  const [userName, setUserName] = useState('Anonim');
  const [userAvatar, setUserAvatar] = useState('');

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
      <img className="comment-photo" src={`${baseUrl}/${userAvatar}`} />
      <div className="comment-info">
        <p className="comment-info__user-name">{userName}</p>
        <p className="comment-info__date">Left a comment {moment(date).fromNow()}</p>
        <p className="comment-info__text">{text}</p>
      </div>
    </CommentItemContainer>
  );
};

export default CommentItem;
