import { createAsyncThunk } from '@reduxjs/toolkit';
import { checkUser } from '../../../api/checkUser';

export const checkUsers = createAsyncThunk(
  'user/checkUser',
  async () => {
    const data = await checkUser();
    return data.data.user;
  },
);
