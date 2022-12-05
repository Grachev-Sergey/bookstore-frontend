import customAxios from '.';
import type { BooksType, GetOneBookType } from '../utils/types/bookTypes';
import type { FilterQueryType } from '../utils/types/filterTypes';

const getBook = (id: number) => {
  return customAxios.get<GetOneBookType>(`/book/${id}`);
};

const getFiltredBooks = (query: FilterQueryType) => {
  return customAxios.get<BooksType>('/book/filtred-books', { params: query });
};

export default {
  getBook,
  getFiltredBooks,
};
