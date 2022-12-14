import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewsCard from '../../components/NewsCard/NewsCard';
import { getNewsRequest } from '../../redux/actions/news';
import './MainPage.css';

export default function MainPage() {
  const dispatch = useDispatch();
  const { news } = useSelector((state) => state.news);

  React.useEffect(() => { dispatch(getNewsRequest()); }, []);
  return (
    <div className="card-list">
      {news.map((post) => (<NewsCard post={post} key={post.id} t />))}
    </div>

  );
}
