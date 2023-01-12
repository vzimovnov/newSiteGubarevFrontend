import api from './api';

const getUser = async (id) => {
  const { data } = await api.get(`/users/${id}`);
  return data;
};
const editUserProfile = async (payload) => {
  const { data } = await api.patch('/users', payload);
  return data;
};

export { getUser, editUserProfile };
