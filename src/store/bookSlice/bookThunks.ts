import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import bookApi from '../../api/bookApi';
import type { FilterQueryType } from '../../utils/types/filterTypes';

const getAllFiltredBooks = createAsyncThunk(
  'books/getFiltredBooks',
  async (query: FilterQueryType, { rejectWithValue }) => {
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
  getAllFiltredBooks,
};
