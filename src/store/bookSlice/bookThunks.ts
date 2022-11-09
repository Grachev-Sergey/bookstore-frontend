import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import bookApi from '../../api/bookApi';
import type { QueryType } from '../../utils/types/queryTypes';

const getAllBooks = createAsyncThunk(
  'books/getBooks',
  async (_, { rejectWithValue }) => {
    try {
      const data = await bookApi.getBooks();
      return data.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err.response?.data);
      }
      throw err;
    }
  },
);

const getAllFiltredBooks = createAsyncThunk(
  'books/getFiltredBooks',
  async (query: QueryType, { rejectWithValue }) => {
    try {
      const data = await bookApi.getFiltredBooks(query);
      return data.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err.response?.data);
      }
      throw err;
    }
  },
);

export default {
  getAllBooks,
  getAllFiltredBooks,
};
