import customAxios from '.';
import type { BooksType, BookType } from '../utils/types/bookTypes';
import type { FilterQueryType } from '../utils/types/filterTypes';

const getBooks = () => {
  return customAxios.get<BooksType>('/book');
};

const getBook = (id: number) => {
  return customAxios.get<BookType>(`/book/${id}`);
};

const getFiltredBooks = (query: FilterQueryType) => {
  return customAxios.get<BooksType>('/book/filtredBooks', { params: query });
};

export default {
  getBooks,
  getBook,
  getFiltredBooks,
};
