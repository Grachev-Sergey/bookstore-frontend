import type { UserCartType } from './cartTypes';
import type { UserFavoriteType } from './favoriteType';
import type { UserRatingType } from './ratingType';

export type UserType = {
  id: string;
  email: string;
  fullName?: string;
  avatar?: string;
  rating?: UserRatingType[];
  favorite?: UserFavoriteType[];
  cart?: UserCartType[];
};

export type UserIdType = {
  userId: number;
};

export type UserObjectType = {
  user: UserType | null;
};

export type UserLoginType = {
  email: string;
  password: string;
  repeatedPassword?: string;
};

export type UserDataType = {
  token: string;
  user: UserType;
};

export type ChangeInfoType = {
  email?: string;
  fullName?: string;
  userId?: number;
};

export type ChangePassType = {
  oldPassword: string;
  newPassword: string;
  repeatedNewPassword: string;
  userId?: number;
};

export type UploadPhotoType = {
  avatar: string | ArrayBuffer | null;
  userId?: number;
};
