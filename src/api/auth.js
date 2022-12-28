import api from './api';

const authentication = async (value) => {
  const { data } = await api.post('/auth/login', value);
  return data;
};
const registration = async (value) => {
  const { data } = await api.post('/auth/register', value);
  return data;
};

export { authentication, registration };
