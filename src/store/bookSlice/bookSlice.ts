import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { BooksType } from '../../utils/types/bookTypes';
import bookThunks from './bookThunks';

const initialState: BooksType = {
  books: [],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setBook(state, action: PayloadAction<BooksType>) {
      // eslint-disable-next-line no-param-reassign
      state = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(bookThunks.getAllBooks.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { setBook } = bookSlice.actions;

export default bookSlice.reducer;
