import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Avatar,
} from '@mui/material';

import { changeModalType, toggleModal } from '../../redux/actions/modal';
import { logout, verificationRequest } from '../../redux/actions/auth';
import {
  LOGIN,
  LOGOUT,
  NAME,
  REGISTRATION,
  TOKEN,
} from './constants';

import './Header.css';

const DEFAULT_AVATAR = '/images/defaultAvatar.png';

function Header() {
  const dispatch = useDispatch();
  const { authUser, isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(verificationRequest());
    }
  }, []);
  const openModal = (type) => {
    dispatch(toggleModal(true));
    dispatch(changeModalType(type));
  };
  const userLogout = () => {
    dispatch(logout());
    localStorage.removeItem(TOKEN);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              {NAME}
            </Link>
          </Typography>
          {isLoggedIn
            ? (
              <Box>
                <Link to={`/users/${authUser.id}`}>
                  <Button color="inherit">
                    <Avatar
                      className="avatar"
                      src={authUser.avatar ? `${process.env.REACT_APP_API_URL}/${authUser.avatar}` : DEFAULT_AVATAR}
                    />
                    {authUser?.login}
                  </Button>
                </Link>

                <Button color="inherit" onClick={() => userLogout()}>{LOGOUT}</Button>
              </Box>
            )
            : (
              <Box>
                <Button color="inherit" onClick={() => openModal('login')}>{LOGIN}</Button>
                <Button color="inherit" onClick={() => openModal('signUp')}>{REGISTRATION}</Button>
              </Box>
            )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default memo(Header);
