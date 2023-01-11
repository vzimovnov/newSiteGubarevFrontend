import api from './api';

export const getAllNews = async () => {
  const { data } = await api.get('/news');
  return data;
};
export const postNews = async (news) => {
  const { data } = await api.post('/news', news);
  return data;
};
