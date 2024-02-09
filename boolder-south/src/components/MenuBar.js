// MenuBar.js
import React from 'react';
import { AppBar, Toolbar, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from "../assets/images/cote_keblo.jpg"

function MenuBar() {
  return (
    <div className='menu-bar-background'>
      <Container maxWidth="lg" disableGutters >
        <AppBar position="static" style={{ color: "#6b7280", backgroundColor: '#FFFFFF', boxShadow: 'none' }}>
          <Toolbar >
            <Link className="link" to={`/`} >
            <img
              src={logo}
              alt="Your App Logo"
              style={{ marginRight: '10px', height: '30px', width: 'auto' }}
            />
            </Link>
            <Typography variant="h6" component="div">
              Boolder South
            </Typography>

            <Typography variant="h6" component="div">
              About
            </Typography>
            {/* Add other AppBar components, buttons, etc. as needed */}
          </Toolbar>
        </AppBar>
      </Container>
    </div>
  );
  
}

export default MenuBar;