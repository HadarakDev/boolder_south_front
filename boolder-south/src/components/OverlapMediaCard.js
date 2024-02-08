import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const OverlapMediaCard = ({ title, altText, text }) => {
  const cardStyle = {
    position: 'relative',
    height: '400px', // Set the desired height
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const textOverlayStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: 'white', // Set the text color
    fontWeight: "800" 
  };

  return (
    <Card style={cardStyle}>
      <img src={"../assets/le-prieure.png"} alt={altText} style={imageStyle} />
      <CardContent style={textOverlayStyle}>
        <Typography className="media-card-title" variant="h5">{title.toUpperCase()}</Typography>
      </CardContent>
    </Card>
  );
};

export default OverlapMediaCard;
