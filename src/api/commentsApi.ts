import customAxios from '.';

import type { CommentInfoType, CommentType } from '../utils/types/commentsType';

const addComment = (commentInfoData: CommentInfoType) => {
  return customAxios.post<CommentType>('/comment/add', commentInfoData);
};

export default {
  addComment,
};
