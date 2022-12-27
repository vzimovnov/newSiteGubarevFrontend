import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import './UserCard.css';

function UserCard({ user }) {
  return (
    <Card sx={{ maxWidth: 370 }} className="user-card">
      <CardActionArea>
        <CardMedia
          component="img"
          image={user?.avatar}
          alt=""
        />
      </CardActionArea>
      <CardContent>
        <Typography className="user__login">
          Login:
          {' '}
          {user?.login}
        </Typography>
        <Typography className="user__name">
          Name:
          {' '}
          {user?.name}
        </Typography>
        <Typography className="user__email">
          Email:
          {' '}
          {user?.email}
        </Typography>
      </CardContent>
    </Card>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
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
