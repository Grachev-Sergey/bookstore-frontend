import { createSlice } from '@reduxjs/toolkit';
import type { BooksType } from '../../utils/types/bookTypes';
import bookThunks from './bookThunks';

const initialState: BooksType = {
  books: [],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(bookThunks.getAllBooks.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default bookSlice.reducer;
