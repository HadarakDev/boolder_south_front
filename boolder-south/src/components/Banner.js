import React from 'react';
import { Container, Grid, Typography } from '@mui/material';

import logo from "../assets/images/naviteau_h.png"


function Banner() {
  return (
    <div className='banner-background'>
      <Container maxWidth="lg" disableGutters className='banner-container'>
        <Grid container spacing={2}>
          <Grid  item xs={6} >
            <div className='centered-vertically'>
              <Typography variant="h4" className='banner-title'>
                Bouldering in <div style={{color: "#D3613A"}}>South of France</div>
              </Typography>
              <Typography variant="body1" className='banner-sub-title' >
                Discover thousands of problems & circuits for all levels.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6}>
            <img src={logo}  alt="Logo" style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Banner;

