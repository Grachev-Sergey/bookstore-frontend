export type UserType = {
  id: string;
  email: string;
  fullName?: string;
  avatar?: string;
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
};

export type ChangePassType = {
  oldPass: string;
  newPass: string;
  repeatedPass: string;
};
