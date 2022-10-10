import axios from '.';

export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export const getAllUser = async () => {
  const response = await axios.get<UserType[]>('/users');
  return response.data;
};
