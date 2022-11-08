import customAxios from '.';
import type { BooksType, BookType } from '../utils/types/bookTypes';

const getBooks = () => {
  return customAxios.get<BooksType>('/book');
};

const getBook = (id: number) => {
  return customAxios.get<BookType>(`/book/${id}`);
};

const getFiltredBooks = (genres: string) => {
  return customAxios.get<BooksType>('/book/filtredBooks', { params: genres });
};

export default {
  getBooks,
  getBook,
  getFiltredBooks,
};
