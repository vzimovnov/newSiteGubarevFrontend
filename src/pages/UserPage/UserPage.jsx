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
  const {
    user,
    isLoading,
    error,
    userNews,
  } = useSelector((state) => state.users);

  const { id } = useParams();
  useEffect(() => {
    if (id) dispatch(getUserRequest(id));
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <BasicAlert severity="error" message={error} />
    );
  }

  return (
    <div className="user-page">
      <div className="user">
        <UserCard user={user} />
      </div>
      <div className="news-list">
        {userNews?.map((item) => (<NewsCard post={item} key={item.id} />))}
      </div>
    </div>

  );
}

export default memo(UserPage);
