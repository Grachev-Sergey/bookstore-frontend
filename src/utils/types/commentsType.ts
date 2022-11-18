import type { UserType } from './userTypes';

export type CommentInfoType = {
  userId: number;
  bookId: number;
  commentText: string;
};

export type CommentType = {
  userId: number;
  createdAt: Date;
  comment: string;
  id: number;
  user: UserType;
};
