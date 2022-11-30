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
  return customAxios.patch<UserDataType>('/user/changeinfo', changedInfo);
};

const changeUserPassApi = (changedPass: ChangePassType) => {
  return customAxios.patch<UserDataType>('/user/changepass', changedPass);
};

const uploadPhotoApi = (avatar: UploadPhotoType) => {
  return customAxios.patch<UserDataType>('/user/uploadphoto', avatar);
};

export default {
  checkUserApi,
  changeUserInfoApi,
  changeUserPassApi,
  uploadPhotoApi,
};
