import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import OverlapMediaCard from '../components/OverlapMediaCard';
import grades_order from "../data/grade.json";
import Grid from '@mui/material/Grid';
const groupProblemsByGrade = (problems) => {
  return problems.reduce((acc, problem) => {
    const grade = problem.grade;
    if (!acc[grade]) {
      acc[grade] = [];
    }
    acc[grade].push(problem);
    
    return acc;
  }, {});
};


const sortObjectKeys = (obj, customSortingOrder) => {
  const sortedKeys = Object.keys(obj).sort(customSortingOrder);
  const sortedObject = sortedKeys.reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {});
  return sortedObject;
};

// Add the rest of the grades in the desired order


const Area = () => {
  const [area, setArea] = useState(null);
  const [problems, setProblems] = useState([]);
  const [groupedProblems, setGroupedProblems] = useState({});
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

        const groupedProblemsData = groupProblemsByGrade(problemsData);
        setGroupedProblems(groupedProblemsData);

        // console.log(sortedGroupedProblems)

      } catch (error) {
        console.error('Error fetching data:', error);
        setArea(null);
        setProblems([]);
      }
    };

    fetchData();
  }, [id]);

  return (
    <Container maxWidth="lg" disableGutters>
      {area && (
        <>
          <OverlapMediaCard img={`../assets/${area.name_searchable}.png`} title={area.name} />
          {/* <h1>{area.name}</h1> */}
          <div className='area-description'>{area.description_en}</div>
          <h3>Boulders of {area.name}</h3>
          <div>
  {Object.keys(groupedProblems).map((grade) => (
    <div className="grade-header" key={grade}>
      <h4>{`${grade}`}</h4>
      {groupedProblems[grade].map((problem) => (
        <Link className="link" to={`/boulder/${problem.name_searchable}`} key={problem.id}>
          <div className="boulder-row">
            <div className="boulder-column">
              <p>{problem.name}</p>
            </div>
            <div className="boulder-column">
              <p>{problem.description}</p>
            </div>
            <div className="boulder-column">
              <p>{problem.grade}</p>
            </div>
            <div className="boulder-column">
              <p>{problem.sub_area_name}</p>
            </div>
            <div className="boulder-column">
              <p>{problem.circuit_color}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  ))}
</div>
        </>
      )}
    </Container>
  );
};

export default Area;
