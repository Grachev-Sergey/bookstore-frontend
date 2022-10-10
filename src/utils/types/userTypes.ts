export type UserType = {
  id: string;
  email: string;
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
