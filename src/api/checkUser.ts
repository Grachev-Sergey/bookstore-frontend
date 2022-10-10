import customAxios from '.';
import type { UserDataType } from '../utils/types/userTypes';

export const checkUser = () => {
  return customAxios.get<UserDataType>('/user/');
};
