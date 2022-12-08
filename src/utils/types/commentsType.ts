import type { UserType } from './userTypes';

export type CommentInfoType = {
  userId: number;
  bookId: number;
  commentText: string;
};

export type CommentType = {
  userId: string | undefined;
  createdAt: string;
  comment: string;
  id: number;
  user: UserType | null;
  bookId: string | undefined;
};
