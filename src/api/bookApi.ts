import customAxios from '.';
import type { BooksType, BookType } from '../utils/types/bookTypes';

const getBooks = () => {
  return customAxios.get<BooksType>('/book');
};

const getBook = (id: number) => {
  return customAxios.get<BookType>(`/book/${id}`);
};

export default {
  getBooks,
  getBook,
};
