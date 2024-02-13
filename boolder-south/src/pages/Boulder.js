import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card } from '@mui/material';

function Boulder() {
  const { name_searchable, id } = useParams();
  const cardStyle = {
    position: 'relative',
    height: '600px',
    width: '800px', // Set the desired height
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };
  return (
    <Container maxWidth="lg" disableGutters>
    <Typography  className="about-title" component="div">
      {name_searchable}
    </Typography>
    <Card style={cardStyle}>
      <img src={`../../assets/placeholder.png`}  style={imageStyle} />
    </Card>
 
  </Container>
  )
}

  export default Boulder;