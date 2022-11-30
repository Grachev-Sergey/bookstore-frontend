import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './bookSlice';
import userSlice from './userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    books: bookSlice,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
