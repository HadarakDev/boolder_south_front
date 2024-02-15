import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card } from '@mui/material';

function Boulder() {
  const { name_searchable, id } = useParams();
  const [problem, setProblem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch area information from the first endpoint
        const problemResponse = await fetch(`http://localhost:3003/problem/${id}`);
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
    objectFit: 'cover',
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

        <Card style={cardStyle}>
          <img src={`../../assets/placeholder.png`}  style={imageStyle} />
        </Card>
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