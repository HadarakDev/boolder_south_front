// src/components/BoulderPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Boulder = () => {
  const [area, setArea] = useState(null);
  const [problems, setProblems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch area information from the first endpoint
        const areaResponse = await fetch(`http://localhost:3003/area/name_searchable/${id}`);
        const areaData = await areaResponse.json();

        // Extract area_id from the first response
        const areaId = areaData.id;

        // Use area_id in the second API call
        const problemsResponse = await fetch(`http://localhost:3003/problem/problems/${areaId}`);
        const problemsData = await problemsResponse.json();

        setArea(areaData);
        setProblems(problemsData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setArea(null);
        setProblems([]);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className='center-margin'>
      {area && (
        <>
          <h1>{area.name}</h1>
          <h2>{area.description}</h2>
          <h3>Boulders of {area.name}</h3>
          <div>
            {problems.map((problem) => (
              <div key={problem.id} className="boulder-item">
                <p>{problem.name}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Boulder;
