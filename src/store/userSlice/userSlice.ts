import { createSlice } from '@reduxjs/toolkit';
import type { UserType } from '../../utils/types/userTypes';
import userThunks from './userThunks';

const initialState: UserType = {
  id: '',
  email: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userThunks.signUpUser.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(userThunks.logInUser.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(userThunks.checkUser.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(userThunks.changeUserInfo.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(userThunks.changeUserPass.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default userSlice.reducer;
