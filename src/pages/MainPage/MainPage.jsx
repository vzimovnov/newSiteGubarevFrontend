import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BasicAlert from '../../components/Alert/Alert';
import Loader from '../../components/Loader/Loader';

import NewsCard from '../../components/NewsCard/NewsCard';
import { getNewsRequest } from '../../redux/actions/news';
import MESSAGE from './constants';

import './MainPage.css';

function MainPage() {
  const dispatch = useDispatch();
  const { news, isLoading, error } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(getNewsRequest());
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <BasicAlert severity="error" message={error} />
    );
  }

  return (
    <div className="card-list">
      {news.length === 0 && <BasicAlert severity="info" message={MESSAGE} />}
      {news.map((post) => (<NewsCard post={post} key={post.id} />))}
    </div>

  );
}

export default memo(MainPage);
