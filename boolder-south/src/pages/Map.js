import React from 'react';
import { Container, Typography } from '@mui/material';

function Map() {
  return (

      <Container maxWidth="lg" disableGutters>
          <Typography variant="h4" className='banner-title' style={{ paddingTop: "100px"}}>
                  {"Map is currently under"} {"development"}
          </Typography>

      </Container>
  )
}

export default Map;