import axios from 'axios';

const customAxios = axios.create({
  baseURL: 'http://localhost:4000/api',
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
