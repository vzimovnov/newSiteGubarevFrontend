import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  Avatar,
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from '@mui/material';

import defaultImage from '../../images/News.jpg';
import defaultAvatar from '../../images/defaultAvatar.png';

import './NewsCard.css';

function NewsCard({
  post: {
    title,
    content,
    picture,
    tags,
    user,
  },
}) {
  return (
    <Card className="card">
      <CardMedia
        component="img"
        height="170"
        image={picture ? `${process.env.REACT_APP_API_URL}/${picture}` : defaultImage}
        alt="picture"
      />
      <CardContent>
        {user && (
          <Link to={`/users/${user?.id}`}>
            <Avatar
              className="avatar"
              src={user?.avatar ? `${process.env.REACT_APP_API_URL}/${user?.avatar}` : defaultAvatar}
            />
            <Typography className="login">
              {user?.login}
            </Typography>
          </Link>
        )}
        <CardActionArea />
        <Typography gutterBottom variant="h4" component="div">
          {title}
        </Typography>
        <Typography>
          {content}
        </Typography>
        <CardActionArea>
          <Typography>
            tags:
            {tags}
          </Typography>
        </CardActionArea>
      </CardContent>
    </Card>
  );
}

NewsCard.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    picture: PropTypes.string,
    tags: PropTypes.string,
    user: PropTypes.shape({
      id: PropTypes.number,
      login: PropTypes.string,
      avatar: PropTypes.string,
    }),
  }),
};

NewsCard.defaultProps = {
  post: {
    tags: '',
    user: {},
    picture: '',
  },
};

export default memo(NewsCard);
