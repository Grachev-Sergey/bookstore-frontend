import customAxios from '.';
import type { ChangeInfoType, ChangePassType, UploadPhotoType, UserDataType, UserObjectType } from '../utils/types/userTypes';

const checkUserApi = () => {
  return customAxios.get<UserDataType>('/user');
};

const genUserById = (id: number) => {
  return customAxios.get<UserObjectType>(`/user/getById/${id}`);
};

const changeUserInfoApi = (changedInfo: ChangeInfoType) => {
  return customAxios.put<UserDataType>('/user/changeinfo', changedInfo);
};

const changeUserPassApi = (changedPass: ChangePassType) => {
  return customAxios.put<UserDataType>('/user/changepass', changedPass);
};

const uploadPhotoApi = (avatar: UploadPhotoType) => {
  return customAxios.put<UserDataType>('/user/uploadphoto', avatar);
};

export default {
  checkUserApi,
  changeUserInfoApi,
  changeUserPassApi,
  uploadPhotoApi,
  genUserById,
};
