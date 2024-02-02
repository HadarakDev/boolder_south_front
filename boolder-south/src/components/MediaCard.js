import * as React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function MediaCard({ title, description, imageUrl, linkTo }) {
  return (
    <Link className="link" to={linkTo}>
    <Card  sx={{ minWidth:300 , maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={imageUrl}
        title={title}
      />
      <CardContent className='cardTitle'>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography  className='cardDescription' variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
    </Link>
  );
}