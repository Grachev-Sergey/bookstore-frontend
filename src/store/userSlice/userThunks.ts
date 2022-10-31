import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import userApi from '../../api/userApi';
import authApi from '../../api/authApi';
import type { UserLoginType, ChangeInfoType, ChangePassType, UploadPhotoType } from '../../utils/types/userTypes';

const checkUser = createAsyncThunk(
  'user/checkUser',
  async (_, { rejectWithValue }) => {
    try {
      const data = await userApi.checkUserApi();
      return data.data.user;
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err.response?.data);
      }
      throw err;
    }
  },
);

const logInUser = createAsyncThunk(
  'user/login',
  async (values: UserLoginType, { rejectWithValue }) => {
    try {
      const data = await authApi.logIn(values);
      localStorage.setItem('token', data.data.token);
      return data.data.user;
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err.response?.data);
      }
      throw err;
    }
  },
);

const signUpUser = createAsyncThunk(
  'user/signup',
  async (values: UserLoginType, { rejectWithValue }) => {
    try {
      const data = await authApi.signUp(values);
      localStorage.setItem('token', data.data.token);
      return data.data.user;
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err.response?.data);
      }
      throw err;
    }
  },
);

const changeUserInfo = createAsyncThunk(
  'user/changeUserInfo',
  async (values:ChangeInfoType, { rejectWithValue }) => {
    try {
      const data = await userApi.changeUserInfoApi(values);
      return data.data.user;
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err.response?.data);
      }
      throw err;
    }
  },
);

const changeUserPass = createAsyncThunk(
  'user/changeUserPass',
  async (values:ChangePassType, { rejectWithValue }) => {
    try {
      const data = await userApi.changeUserPassApi(values);
      return data.data.user;
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err.response?.data);
      }
      throw err;
    }
  },
);

const uploadPhoto = createAsyncThunk(
  'user/uploadPhoto',
  async (values:UploadPhotoType, { rejectWithValue }) => {
    try {
      const data = await userApi.uploadPhotoApi(values);
      return data.data.user;
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err.response?.data);
      }
      throw err;
    }
  },
);

export default {
  checkUser,
  logInUser,
  signUpUser,
  changeUserInfo,
  changeUserPass,
  uploadPhoto,
};
