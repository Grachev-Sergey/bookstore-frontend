import customAxios from '.';
import type {
  ChangeInfoType,
  ChangePassType,
  UploadPhotoType,
  UserDataType,
} from '../utils/types/userTypes';

const checkUserApi = () => {
  return customAxios.get<UserDataType>('/user');
};

const changeUserInfoApi = (changedInfo: ChangeInfoType) => {
  return customAxios.patch<UserDataType>('/user/change-info', changedInfo);
};

const changeUserPassApi = (changedPass: ChangePassType) => {
  return customAxios.patch<UserDataType>('/user/change-pass', changedPass);
};

const uploadPhotoApi = (avatar: UploadPhotoType) => {
  return customAxios.patch<UserDataType>('/user/upload-photo', avatar);
};

export default {
  checkUserApi,
  changeUserInfoApi,
  changeUserPassApi,
  uploadPhotoApi,
};
