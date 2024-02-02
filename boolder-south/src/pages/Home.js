import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import LinkTable  from '../components/LinkTable';
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
        <Banner></Banner>
        <LinkTable></LinkTable>
    </div>
  );
};

export default Home;
