import { useEffect, useState } from 'react';
import io from 'socket.io-client';

import { CommentsContainer } from './Comments.styles';

import Button from '../Button';
import CommentItem from './CommentItem';

import type { CommentType } from '../../utils/types/commentsType';
import type { UserType } from '../../utils/types/userTypes';
import config from '../../utils/config';

type PropsType = {
  userInfo: UserType | null;
  bookId?: string;
  comments?: CommentType[];
};
const socket = io(config.baseUrl);

const Comments: React.FC<PropsType> = ({ comments = [], userInfo, bookId }) => {
  const [bookComments, setBookComments] = useState<CommentType[]>(comments ?? []);
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    socket.on('addComment', (data) => {
      setBookComments((prev) => {
        if (!prev) return [];
        return [...prev, data];
      });
    });
    return () => {
      socket.removeAllListeners();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentText(e.target.value);
  };

  const addComment = () => {
    if (!commentText.trim()) {
      return;
    }
    // eslint-disable-next-line no-console
    console.log(commentText);
    socket.emit('addComment', {
      userId: Number(userInfo?.id),
      bookId: Number(bookId),
      commentText,
    });
    setCommentText('');
  };

  return (
    <CommentsContainer>
      {!bookComments
        ? <div className="no-comments">Be the first to comment</div>
        : (
          bookComments.map((item) => {
            return (
              <CommentItem
                key={item.id}
                user={item.user}
                date={item.createdAt}
                text={item.comment}
              />
            );
          })
        )}
      {userInfo?.email &&
        (<div className="add-comments">
            <textarea
              className="add-comments__textarea"
              placeholder="Share a comment"
              value={commentText}
              onChange={handleChangeText}
            />
          <Button className="add-comments__button" onClick={addComment}>Post a comment</Button>
         </div>)}
    </CommentsContainer>
  );
};

export default Comments;
