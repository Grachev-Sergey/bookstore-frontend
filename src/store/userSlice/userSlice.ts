import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { UserObjectType, UserType,
  UserLoginType,
  ChangeInfoType,
  ChangePassType,
  UploadPhotoType } from '../../utils/types/userTypes';
import userThunks from './userThunks';

const initialState: UserObjectType = {
  user: {
    id: '',
    email: '',
    fullName: '',
    avatar: '',
  },
};

const foo = (state: UserObjectType, action: PayloadAction<UserType | undefined, string, {
  arg: UserLoginType | void | ChangeInfoType | ChangePassType | UploadPhotoType;
  requestId: string;
  requestStatus: 'fulfilled';
}, never>) => {
  if (!action.payload) return;
  // eslint-disable-next-line no-param-reassign
  state.user = action.payload;
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userThunks.signUpUser.fulfilled, foo);
    builder.addCase(userThunks.logInUser.fulfilled, foo);
    builder.addCase(userThunks.checkUser.fulfilled, foo);
    builder.addCase(userThunks.changeUserInfo.fulfilled, foo);
    builder.addCase(userThunks.changeUserPass.fulfilled, foo);
    builder.addCase(userThunks.uploadPhoto.fulfilled, foo);
  },
});

export default userSlice.reducer;
