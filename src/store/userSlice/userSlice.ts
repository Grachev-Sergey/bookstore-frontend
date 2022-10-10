import { createSlice } from '@reduxjs/toolkit';
import type { UserType } from '../../utils/types/userTypes';
import { checkUsers } from './thunks/checkUsers';
import { logInUser } from './thunks/logInUser';
import { signUpUser } from './thunks/signUpUser';

const initialState: UserType = {
  id: '',
  email: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUpUser.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(logInUser.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(checkUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default userSlice.reducer;
