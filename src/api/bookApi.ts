import customAxios from '.';
import type { BooksType } from '../utils/types/bookTypes';

const getBooks = () => {
  return customAxios.get<BooksType>('/book');
};

export default {
  getBooks,
};
