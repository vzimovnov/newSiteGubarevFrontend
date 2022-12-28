import api from './api';

const checkUser = async () => {
  const { data } = await api.get('/auth/whoami');
  return data;
};

export default checkUser;
