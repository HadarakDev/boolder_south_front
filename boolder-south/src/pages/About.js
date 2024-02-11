import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import CarrouselAreas  from '../components/Carrousel';
import {  Container, Typography } from '@mui/material';

const Home = () => {

  return (
    <div>
      <Container maxWidth="lg" disableGutters>
        <Typography  component="div">
            Why this project?
        </Typography>
        <Typography  component="div">
            A little description of me
        </Typography>
        <Typography  component="div">
            Boolder
        </Typography>
        <Typography  component="div">
            Boolder
        </Typography>
      </Container>
    </div>
  );
};

export default Home;
