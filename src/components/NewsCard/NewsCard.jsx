import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './NewsCard.css';

export default function NewsCard({
  post: {
    login,
    avatar,
    title,
    content,
    picture,
    tags,
  },
}) {
  return (
    <Card sx={{ maxWidth: 345 }} className="card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={picture}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
          <Typography>
            {avatar}
            {' '}
            {login}
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
    login: PropTypes.string,
    avatar: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    picture: PropTypes.string,
    tags: PropTypes.string,
  }).isRequired,
};
