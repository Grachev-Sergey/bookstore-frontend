import axios from 'axios';
import { baseUrl } from '../utils/config';

const customAxios = axios.create({
  baseURL: `${baseUrl}/api`,
});

customAxios.interceptors.request.use((request) => {
  const token = localStorage.getItem('token');
  if (token) {
    request.headers = {
      ...request.headers,
      authorization: `Bearer ${token}`,
    };
  }
  return request;
});

export default customAxios;
