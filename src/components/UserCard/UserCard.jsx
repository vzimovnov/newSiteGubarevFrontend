import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Box, Button } from '@mui/material';

import { changeModalType, toggleModal } from '../../redux/actions/modal';
import ADD_NEWS from './constants';

import './UserCard.css';

function UserCard({ user }) {
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.auth);

  const openModal = (type) => {
    dispatch(toggleModal(true));
    dispatch(changeModalType(type));
  };
  return (
    <Card sx={{ maxWidth: 370 }} className="user-card">
      <CardActionArea>
        <CardMedia
          component="img"
          image={user?.avatar}
          alt=""
          height="230"
        />
      </CardActionArea>
      <CardContent>
        <Typography className="user-login">
          Login:
          {' '}
          {user?.login}
        </Typography>
        <Typography className="user-name">
          Name:
          {' '}
          {user?.name}
        </Typography>
        <Typography className="user-email">
          Email:
          {' '}
          {user?.email}
        </Typography>
        {authUser.id === user?.id
          && (
            <Box>
              <Button color="inherit" onClick={() => openModal(ADD_NEWS)}>Добавить новость </Button>
              <Button color="inherit">Редактировать профиль</Button>
            </Box>
          )}
      </CardContent>
    </Card>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    login: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.string,
  }),
};
UserCard.defaultProps = {
  user: {},
};
export default memo(UserCard);
