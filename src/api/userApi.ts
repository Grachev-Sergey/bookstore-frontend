import customAxios from '.';
import type { ChangeInfoType, ChangePassType, UserDataType } from '../utils/types/userTypes';

const changeUserInfoApi = (changedInfo: ChangeInfoType) => {
  return customAxios.put<UserDataType>('/user/changeinfo', changedInfo);
};

const checkUserApi = () => {
  return customAxios.get<UserDataType>('/user');
};

const changeUserPassApi = (changedPass: ChangePassType) => {
  return customAxios.put<UserDataType>('/user/changepass', changedPass);
};

export default {
  checkUserApi,
  changeUserInfoApi,
  changeUserPassApi,
};
