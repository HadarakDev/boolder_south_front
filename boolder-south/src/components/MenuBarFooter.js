import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';

function MenuBarFooter() {
  return (
    <div className='footer-bar-background'>
      <Container maxWidth="lg" disableGutters>
        <AppBar position="static" className='footer-app-bar'>
          <Toolbar>
            <Typography className="footer-bar-item" component="div">
              SouthCrag
            </Typography>
            <Link className="link" to={`/about`} >
              <Typography className="footer-bar-item"  component="div">
                About
              </Typography>
            </Link>
            {/* Add more menu items as needed */}
          </Toolbar>
        </AppBar>
      </Container>
    </div>
  );
}

export default MenuBarFooter;
