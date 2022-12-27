import React, { memo } from 'react';
// import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, CardActionArea } from '@mui/material';

import './NewsCard.css';
import { Link } from 'react-router-dom';

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
        image={picture}
        alt=""
      />
      <CardContent>
        <CardActionArea>
          <Link to={`/users/${user?.id}`}>
            <Avatar
              className="avatar"
              src={user?.avatar}
            />
            <Typography className="login">
              {user?.login}
            </Typography>
          </Link>
        </CardActionArea>
        <Typography gutterBottom variant="h4" component="div">
          {title}
        </Typography>
        <Typography>
          {content}
        </Typography>
        <Typography>
          {tags}
        </Typography>
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
  },
};

export default memo(NewsCard);
