import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './bookSlice/bookSlice';
import userSlice from './userSlice/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    books: bookSlice,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
