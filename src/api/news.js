import api from './api';

const getAllNews = async () => {
  const { data } = await api.get('/news');
  return data;
};

export default getAllNews;
