import type { CommentType } from './commentsType';

export type BookType = {
  id: string;
  cover: string;
  title: string;
  author: string;
  description: string;
  dateOfIssue: string;
  genre: string[];
  hardCover: boolean;
  hardCoverPrice?: string;
  paperback: boolean;
  paperbackPrice?: string;
  status?: string;
  rating?: number;
  comments?: string;
};

export type BooksType = {
  books: BookType[];
  counter: number;
  numberPerPage: number;
};

export type GetOneBookType = {
  book: BookType;
  comments: CommentType[];
};
