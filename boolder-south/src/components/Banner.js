import React from 'react';
import { Container, Grid, Typography } from '@mui/material';

import logo from "../assets/images/naviteau_h.png"


function Banner() {
  return (

    <Container maxWidth="lg" className='BannerContainer'>
      <Grid container spacing={2}>
      <Grid  item xs={6} >

      <div className='centeredVertically'>
        <Typography variant="h4" className='BannerTitle'>
          Bouldering in South of France
        </Typography>
        <Typography variant="body1" className='BannerSubTitle' >
          Discover thousands of problems & circuits for all levels.
        </Typography>
      </div>
    </Grid>
        <Grid item xs={6}>
          <img src={logo} alt="Logo" style={{ maxHeight: '350px', width: '100%', objectFit: 'cover' }} />
          {/* Set width to '100%' and use objectFit to ensure the image stays within its container */}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Banner;

