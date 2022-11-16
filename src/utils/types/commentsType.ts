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
};

export type CommentsType = {
  comments: CommentType[];
};
