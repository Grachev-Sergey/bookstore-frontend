import type { BookType } from './bookTypes';

export type FavoriteType = {
  bookId?: number;
  userId?: number;
};

export type UserFavoriteType = {
  id?: number;
  bookId?: number;
  userId?: number;
};

export type FavoriteBooksType = {
  id?: number;
  bookId?: number;
  userId?: number;
  book: BookType;
};
