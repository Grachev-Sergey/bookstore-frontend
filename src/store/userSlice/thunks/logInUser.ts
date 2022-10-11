import { createAsyncThunk } from '@reduxjs/toolkit';
import type { UserLoginType } from '../../../utils/types/userTypes';
import authApi from '../../../api/authApi';

export const logInUser = createAsyncThunk(
  'user/login',
  async (values: UserLoginType) => {
    const data = await authApi.logIn(values);
    localStorage.setItem('token', data.data.token);
    return data.data.user;
  },
);
