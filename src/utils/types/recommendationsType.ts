import type { BookType } from './bookTypes';

export type RecommendedBookType = {
  recommended: BookType[];
};

export type RecommendedQueryType = {
  window: number;
  id: number;
};
