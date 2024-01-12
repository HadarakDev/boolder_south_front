import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
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
    <div>
      <h1>Bouldering in South of France</h1>
      <h2>Discover thousands of problems & circuits for all levels.</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Area Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {areas.map((area) => (
              <TableRow key={area.id}>
                <TableCell>
                  <Link to={`/area/${area.name_searchable}`} style={{ textDecoration: 'none', color: '#333' }}>
                    {area.name}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Home;
