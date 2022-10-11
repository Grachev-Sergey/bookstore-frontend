import customAxios from '.';
import type { UserDataType, UserLoginType } from '../utils/types/userTypes';

const signUp = (signUpData: UserLoginType) => {
  return customAxios.post<UserDataType>('/signup', signUpData);
};

const logIn = (logInData: UserLoginType) => {
  return customAxios.post<UserDataType>('/login', logInData);
};

export default { signUp, logIn };
