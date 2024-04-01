// import React from 'react';
import { Container, Grid, Typography } from '@mui/material';

import logo from "../assets/images/naviteau_h.png"

import React, { useState, useEffect } from 'react';


function Banner({ title_start, title_end }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 480); // Change the threshold as needed
    }

    // Initial check
    handleResize();

    // Listen to window resize event
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className='banner-background'>
      <Container maxWidth="lg" disableGutters className='banner-container'>
        <Grid container spacing={2}>
          {!isMobile ? (
            <>
              <Grid item xs={6}>
                <div className='centered-vertically'>
                  <Typography variant="h4" className='banner-title'>
                    {title_start} <div style={{ color: "#D3613A" }}>{title_end}</div>
                  </Typography>
                  <Typography variant="body1" className='banner-sub-title'>
                    Découvre des Blocs et des circuits.
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={6}>
                <img src={logo} alt="Logo" style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }} />
              </Grid>
            </>
          ) : (
            <>
              <Grid item xs={12}>
                <div className='centered-vertically'>
                  <Typography variant="h4" className='banner-title'>
                    {title_start} <div style={{ color: "#D3613A" }}>{title_end}</div>
                  </Typography>
                  <Typography variant="body1" className='banner-sub-title'>
                    Découvre des Blocs et des circuits.
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12}>
                <img src={logo} alt="Logo" style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }} />
              </Grid>
            </>
          )}
        </Grid>
      </Container>
    </div>
  );
}

export default Banner;

// function Banner({title_start, title_end}) {
//   return (
//     <div className='banner-background'>
//       <Container maxWidth="lg" disableGutters className='banner-container'>
//         <Grid container spacing={2}>
//           <Grid  item xs={6} >
//             <div className='centered-vertically'>
//               <Typography variant="h4" className='banner-title'>
//                 {title_start} <div style={{color: "#D3613A"}}>{title_end}</div>
//               </Typography>
//               <Typography variant="body1" className='banner-sub-title' >
//                 Découvre des Blocs et des circuits.
//               </Typography>
//             </div>
//           </Grid>
//           <Grid item xs={6}>
//             <img src={logo}  alt="Logo" style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }} />
//           </Grid>
//         </Grid>
//       </Container>
//     </div>
//   );
// }

// export default Banner;

