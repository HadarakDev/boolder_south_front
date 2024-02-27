import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import OverlapMediaCard from '../components/OverlapMediaCard';
import grades_order from "../data/grade.json";

const groupProblemsByGrade = (problems) => {
  return problems.reduce((acc, problem) => {
    const grade = problem.grade;
    if (!acc[grade]) {
      acc[grade] = [];
    }
    acc[grade].push(problem);
    const sortedGrades = Object.keys(acc).sort((a, b) => grades_order[a] - grades_order[b]);

    // Create a new object with sorted grades
    const sortedGroupedProblems = {};
    sortedGrades.forEach((grade) => {
      sortedGroupedProblems[grade] = acc[grade];
    });
    console.log(sortedGroupedProblems)
    return sortedGroupedProblems;
  }, {});
};

const CircleComponent = ({ problem }) => {
  return (
    <div className="circle" style={{ backgroundColor: problem.circuit_color }}>
     <p className="circle-text">{problem.circuit_number}</p>
    </div>
  );
};
const Area = () => {
  const [area, setArea] = useState(null);
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
        // setProblems(problemsData);

        const groupedProblemsData = groupProblemsByGrade(problemsData);
        setGroupedProblems(groupedProblemsData);

        // console.log(sortedGroupedProblems)

      } catch (error) {
        console.error('Error fetching data:', error);
        setArea(null);
      }
    };

    fetchData();
  }, [id]);

  return (
    <Container maxWidth="lg" disableGutters>
      {area && (
        <>
          <OverlapMediaCard img={`../assets/${area.name_searchable}.png`} title={area.name} />
          <div className='area-description'>{area.description_en}</div>
            <Typography className="about-title" component="div">
              Localisation
            </Typography>
            <Typography className="about-title" component="div">
              Boulders of {area.name}
            </Typography>
          <div className='boulders-table'>
            {Object.keys(groupedProblems).map((grade) => (
              <div className="grade-header" key={grade}>
                <h4>{`${grade}`}</h4>
                {groupedProblems[grade].map((problem) => (
                  <Link
                  className="link"
                  to={`/boulder/${problem.name_searchable}/${problem.id}`}
                  key={problem.id}
                >
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
                        <CircleComponent problem={problem} />
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
