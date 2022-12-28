import api from './api';

const getUser = async (id) => {
  const { data } = await api.get(`/users/${id}`);
  return data;
};

export default getUser;
