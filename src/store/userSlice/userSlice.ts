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
    rating: [],
    favorite: [],
    cart: [],
  },
};

const fillingState = (state: UserObjectType, action: PayloadAction<UserType | undefined, string, {
  arg: UserLoginType | void | ChangeInfoType | ChangePassType | UploadPhotoType;
  requestId: string;
  requestStatus: 'fulfilled';
}, never>) => {
  if (!action.payload) return;
  state.user = action.payload;
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userThunks.signUpUser.fulfilled, fillingState);
    builder.addCase(userThunks.logInUser.fulfilled, fillingState);
    builder.addCase(userThunks.checkUser.fulfilled, fillingState);
    builder.addCase(userThunks.changeUserInfo.fulfilled, fillingState);
    builder.addCase(userThunks.changeUserPass.fulfilled, fillingState);
    builder.addCase(userThunks.uploadPhoto.fulfilled, fillingState);
  },
});

export default userSlice.reducer;
