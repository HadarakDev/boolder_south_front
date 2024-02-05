import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import OverlapMediaCard from '../components/OverlapMediaCard';
import customSortingOrder from "../data/grade.json";
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

// const customSortingOrder = {
//   '9a': 1,
//   '8c+': 2,
//   '8c': 3,
//   '8b+': 4,
//   '8b': 5,
//   '8a+': 6,
//   '8a': 7,
//   '7c+': 8,
//   '7c': 9,
//   '7b+': 10,
//   '7b': 11,
//   '7a+': 12,
//   '7a': 13,
//   '6c+': 14,
//   '6c': 15,
//   '6b+': 16,
//   '6b': 17,
//   '6a+': 18,
//   '6a': 19,
//   '5c+': 20,
//   '5c': 21,
//   '5b+': 22,
//   '5b': 23,
//   '5a+': 24,
//   '5a': 25,
//   '4c+': 26,
//   '4c': 27,
//   '4b+': 28,
//   '4b': 29,
//   '4a+': 30,
//   '4a': 31,
//   '3c+': 32,
//   '3c': 33,
//   '3b+': 34,
//   '3b': 35,
//   '3a+': 36,
//   '3a': 37,
//   '2c+': 38,
//   '2c': 39,
//   '2b+': 40,
//   '2b': 41,
//   '2a+': 42,
//   '2a': 43,
// };

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
          <OverlapMediaCard />
          {/* <h1>{area.name}</h1> */}
          <div>{area.description_en}</div>
          <h3>Boulders of {area.name}</h3>
          <div>
            {Object.keys(groupedProblems)
              .sort((a, b) => customSortingOrder[a] - customSortingOrder[b])
              .map((grade) => (
                <div key={grade}>
                  <h2>{`Grade ${grade}`}</h2>
                  {groupedProblems[grade].map((problem) => (
                    <div key={problem.id} className="boulder-item">
                      <p>{problem.name}</p>
                    </div>
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
