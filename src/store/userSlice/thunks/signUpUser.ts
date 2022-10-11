import { createAsyncThunk } from '@reduxjs/toolkit';
import type { UserLoginType } from '../../../utils/types/userTypes';
import authApi from '../../../api/authApi';

export const signUpUser = createAsyncThunk(
  'user/signup',
  async (values: UserLoginType) => {
    const data = await authApi.signUp(values);
    localStorage.setItem('token', data.data.token);
    return data.data.user;
  },
);
