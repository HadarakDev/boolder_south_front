import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Card, CardContent, CardMedia } from '@mui/material';
// import img from "../assets/images/naviteau.png"




const cardStyle = {
  position: 'relative',
  height: '300px', // Set the desired height
  width: "250px",
  marginLeft: '10px'
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const textOverlayStyle = {
  position: 'absolute',
  fontSize: "14px",
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  color: 'white', // Set the text color
  fontWeight: "400" 
};

function CarrouselAreas() {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://south-crag-backend.hadarak.com/area');
        const data = await response.json();
        setAreas(data);
      } catch (error) {
        console.error('Error fetching areas:', error);
        setAreas([]);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="areas-container">

      <Container maxWidth="lg" disableGutters>

        <div className='card-container'>
          {areas.map((area) => (
            <Link className="link-area" to={`/area/${area.name_searchable}`}>
              <Card style={cardStyle}>
                <img src={`assets/${area.name_searchable}-low.png`} alt={area.name} style={imageStyle} />
                <CardContent style={textOverlayStyle}>
                  <Typography className="media-card-title-small" variant="h5">{area.name.toUpperCase()}</Typography>
                </CardContent>
              </Card>
              </Link>
          ))}
        </div>


      </Container>
    </div>
  );
}

export default CarrouselAreas;
