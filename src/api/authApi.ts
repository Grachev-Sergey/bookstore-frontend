import customAxios from '.';
import type { UserDataType, UserLoginType } from '../utils/types/userTypes';

const signUp = (signUpData: UserLoginType) => {
  return customAxios.post<UserDataType>('/auth/sign-up', signUpData);
};

const logIn = (logInData: UserLoginType) => {
  return customAxios.post<UserDataType>('/auth/sign-in', logInData);
};

export default { signUp, logIn };
