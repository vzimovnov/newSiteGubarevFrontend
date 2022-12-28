import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import BasicAlert from '../../components/Alert/Alert';
import Loader from '../../components/Loader/Loader';
import NewsCard from '../../components/NewsCard/NewsCard';
import UserCard from '../../components/UserCard/UserCard';
import { getUserRequest } from '../../redux/actions/user';

import './UserPage.css';

function UserPage() {
  const dispatch = useDispatch();
  const { user, isLoading, error } = useSelector((state) => state.users);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getUserRequest(id));
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
    <div>
      <div className="user">
        <UserCard user={user} />
      </div>
      <div className="news-list">
        {user?.news.map((item) => (<NewsCard post={item} key={item.id} />))}
      </div>
    </div>

  );
}

export default memo(UserPage);