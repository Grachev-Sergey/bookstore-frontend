import { createAsyncThunk } from '@reduxjs/toolkit';
import userApi from '../../api/userApi';
import authApi from '../../api/authApi';
import type { UserLoginType, ChangeInfoType, ChangePassType, UploadPhotoType } from '../../utils/types/userTypes';

const checkUser = createAsyncThunk(
  'user/checkUser',
  async () => {
    try {
      const data = await userApi.checkUserApi();
      return data.data.user;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  },
);

const logInUser = createAsyncThunk(
  'user/login',
  async (values: UserLoginType) => {
    try {
      const data = await authApi.logIn(values);
      localStorage.setItem('token', data.data.token);
      return data.data.user;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  },
);

const signUpUser = createAsyncThunk(
  'user/signup',
  async (values: UserLoginType) => {
    try {
      const data = await authApi.signUp(values);
      localStorage.setItem('token', data.data.token);
      return data.data.user;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  },
);

const changeUserInfo = createAsyncThunk(
  'user/changeUserInfo',
  async (values:ChangeInfoType) => {
    try {
      const data = await userApi.changeUserInfoApi(values);
      return data.data.user;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  },
);

const changeUserPass = createAsyncThunk(
  'user/changeUserPass',
  async (values:ChangePassType) => {
    try {
      const data = await userApi.changeUserPassApi(values);
      return data.data.user;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  },
);

const uploadPhoto = createAsyncThunk(
  'user/uploadPhoto',
  async (values:UploadPhotoType) => {
    try {
      const data = await userApi.uploadPhotoApi(values);
      return data.data.user;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
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
