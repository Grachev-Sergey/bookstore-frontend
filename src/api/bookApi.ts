import customAxios from '.';

const getBooks = () => {
  return customAxios.get('/book');
};

export default {
  getBooks,
};
