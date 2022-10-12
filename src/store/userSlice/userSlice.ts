// import { createSlice, type PayloadAction, type Draft } from '@reduxjs/toolkit';
// import type { UserType,
//   UserLoginType,
//   ChangeInfoType,
//   ChangePassType } from '../../utils/types/userTypes';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { UserType } from '../../utils/types/userTypes';
import userThunks from './userThunks';

const initialState: UserType = {
  id: '',
  email: '',
  fullName: '',
  avatar: '',
};

// const foo = (state: Draft<UserType>, action: PayloadAction<UserType | undefined, string, {
//   arg: UserLoginType | void | ChangeInfoType | ChangePassType;
//   requestId: string;
//   requestStatus: 'fulfilled';
// }, never>) => {
//   // eslint-disable-next-line no-param-reassign
//   state = action.payload;
// };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserType>) {
      // eslint-disable-next-line no-param-reassign
      state = action.payload;
    },
  },
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

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
