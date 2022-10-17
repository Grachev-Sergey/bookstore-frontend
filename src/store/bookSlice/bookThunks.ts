import { createAsyncThunk } from '@reduxjs/toolkit';
import bookApi from '../../api/bookApi';

const getAllBooks = createAsyncThunk(
  'books/getBooks',
  async () => {
    try {
      const data = await bookApi.getBooks();
      return data.data;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  },
);

export default {
  getAllBooks,
};
