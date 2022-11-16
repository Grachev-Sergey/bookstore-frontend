import customAxios from '.';

import type { CommentsType, CommentInfoType } from '../utils/types/commentsType';

const addComment = (commentInfoData: CommentInfoType) => {
  return customAxios.post('/comment/add', commentInfoData);
};

const getAllComments = (id: number) => {
  return customAxios.get<CommentsType>(`/comment/${id}`);
};

export default {
  addComment,
  getAllComments,
};
