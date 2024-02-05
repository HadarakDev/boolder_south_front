// MenuBar.js
import React from 'react';
import { AppBar, Toolbar, Container, Typography } from '@mui/material';
import logo from "../assets/images/cote_keblo.jpg"

function MenuBar() {
  return (
    <Container maxWidth="lg" disableGutters >
      <AppBar position="static" style={{ color: "#6b7280", backgroundColor: '#FFFFFF', boxShadow: 'none' }}>
        <Toolbar >
          <img
            src={logo}
            alt="Your App Logo"
            style={{ marginRight: '10px', height: '30px', width: 'auto' }}
          />
          <Typography variant="h6" component="div">
            Boolder South
          </Typography>
          {/* Add other AppBar components, buttons, etc. as needed */}
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default MenuBar;