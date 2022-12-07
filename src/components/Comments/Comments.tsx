import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import io from 'socket.io-client';

import { CommentsContainer } from './Comments.styles';

import Button from '../Button';
import CommentItem from './CommentItem';

import type { CommentType } from '../../utils/types/commentsType';
import type { UserType } from '../../utils/types/userTypes';
import { baseUrl } from '../../utils/config';

type PropsType = {
  userInfo: UserType | null;
  bookId?: string;
  comments: CommentType[] | null;
};

const Comments: React.FC<PropsType> = ({ comments, userInfo, bookId }) => {
  const [bookComments, setBookComments] = useState<CommentType[] | null>(comments);
  const [commentText, setCommentText] = useState('');
  const socket = io(baseUrl);

  useEffect(() => {
    setBookComments(comments);
  }, [comments]);

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

  const addComment = async () => {
    if (!commentText.trim()) {
      return;
    }
    try {
      socket.emit('addComment', {
        userId: Number(userInfo?.id),
        bookId: Number(bookId),
        commentText,
      });
      setCommentText('');
    } catch (err) {
      const error = err as Error;
      return toast.error(error.message);
    }
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
