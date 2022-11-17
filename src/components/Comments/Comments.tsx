import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { CommentsContainer } from './Comments.styles';

import commentsApi from '../../api/commentsApi';

import Button from '../Button';
import CommentItem from './CommentItem/CommentItem';

import type { CommentInfoType, CommentType } from '../../utils/types/commentsType';
import type { UserType } from '../../utils/types/userTypes';

type PropsType = {
  userInfo: UserType | null;
  bookId?: string;
};

const Comments: React.FC<PropsType> = ({ userInfo, bookId }) => {
  const [bookComments, setBookComments] = useState<CommentType[]>([]);
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const comments = await commentsApi.getAllComments(Number(bookId));
        setBookComments(comments.data.comments);
      } catch (err) {
        const error = err as Error;
        return toast.error(error.message);
      }
    })();
  }, [bookId]);

  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentText(e.target.value);
  };

  const addComment = async () => {
    try {
      const commentInfoData: CommentInfoType = {
        userId: Number(userInfo?.id),
        bookId: Number(bookId),
        commentText,
      };
      const newComment = await commentsApi.addComment(commentInfoData);
      setCommentText('');
      setBookComments((prev) => {
        if (!prev) return [];
        return [...prev, newComment.data.comment];
      });
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
                userId={item.userId}
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
