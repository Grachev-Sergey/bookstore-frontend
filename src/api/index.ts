import axios from 'axios';
import config from '../utils/config';

const customAxios = axios.create({
  baseURL: `${config.baseUrl}/api`,
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
