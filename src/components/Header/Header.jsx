import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { changeModalType, toggleModal } from '../../redux/actions/modal';
import { logout, verificationRequest } from '../../redux/actions/auth';
import {
  LOGIN,
  LOGOUT,
  NAME,
  REGISTRATION,
  TOKEN,
} from './constants';

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
                  <Button color="inherit">{authUser?.login}</Button>
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
