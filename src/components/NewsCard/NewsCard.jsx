import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, CardActionArea } from '@mui/material';

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
    <Card sx={{ maxWidth: 370 }} className="card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={picture}
          alt=""
        />
        <CardContent>
          <Avatar
            src={user.avatar}
          />
          <Typography>
            {user.login}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
          <Typography>
            {tags}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

NewsCard.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    picture: PropTypes.string,
    tags: PropTypes.string,
    user: PropTypes.shape({
      login: PropTypes.string,
      avatar: PropTypes.string,
    }),
  }).isRequired,
};

export default memo(NewsCard);
