import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card } from '@mui/material';
import { Link } from 'react-router-dom';

function Boulder() {
  const { area_name_searchable, id } = useParams();
  const [problem, setProblem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch area information from the first endpoint
        const problemResponse = await fetch(`https://south-crag-backend.hadarak.com/problem/${id}`);
        const problemData = await problemResponse.json();
        setProblem(problemData);
      }
      catch (error) {
        console.error('Error fetching data:', error);
        setProblem(null);
      }
  };
  fetchData();
}, [id]);

const cardStyle = {
  position: 'relative',
  height: '600px',
  width: '800px', // Set the desired height
};

const imageStyle = {
  width: '100%',
  height: '100%',
  // objectFit: 'cover',
};

  return (
    <Container maxWidth="lg" disableGutters>
      {problem && (
        <>
        <div className='boulder-box'>
        <Typography  className="about-title" component="div">
          {problem.name}
          <div className='boulder-grade'>{problem.grade}</div>
        </Typography>
        <Link
            className="back-link"
            to={`/area/${area_name_searchable}/`}
          >
            Back to {area_name_searchable}
          </Link>
        <div className='boulder-card'>
        {/* <Card className='boulder-card-style'> */}
          <img src={`../../assets/${area_name_searchable}/${problem.name_searchable}.png`} alt="Boolder Image" style={imageStyle} className="boulder-image-style" />
        {/* </Card> */}
        </div>
        <Typography  className="boulder-description" component="div">
          {problem.description}
        </Typography>

        </div>
        </>
        
      )}
      

 
  </Container>
  )
}

export default Boulder;