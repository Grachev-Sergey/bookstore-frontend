import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
