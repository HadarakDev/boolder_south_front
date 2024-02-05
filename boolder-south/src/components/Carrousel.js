import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import MediaCard  from './MediaCard';
// import img from "../assets/images/naviteau.png"

function CarrouselAreas() {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3003/area');
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
            <MediaCard
              linkTo={`/area/${area.name_searchable}`}
              key={area.id}
              title={area.name}
              description={`Description: ${area.description_en}`}
              imageUrl={`assets/${area.name_searchable}.png`} // Replace with the path to your area images
            />
          ))}
        </div>


      </Container>
    </div>
  );
}

export default CarrouselAreas;
