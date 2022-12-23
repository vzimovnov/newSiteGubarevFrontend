import axios from 'axios';

import { getTokenFromLocalStorage } from '../utils/localStorage';

const api = axios.create({ baseURL: process.env.REACT_APP_API_URL });

api.interceptors.request.use(
  (config) => {
    const { headers } = config;
    const token = getTokenFromLocalStorage();

    if (token) {
      headers.Authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default api;
