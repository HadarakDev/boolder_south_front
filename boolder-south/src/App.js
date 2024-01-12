
// src/components/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Boulder from './components/Boulder';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/area/:id" element={<Boulder />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;

// import React, { useState, useEffect } from 'react';

// const HomePage = () => {
//   const [areas, setAreas] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:3003/area');
//         const data = await response.json();
//         setAreas(data);
//       } catch (error) {
//         console.error('Error fetching areas:', error);
//         setAreas([]);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Bouldering in South of France</h1>
//       <h2>Discover thousands of problems & circuits for all levels.</h2>
//       <ul>
//         {areas.map((area) => (
//           <li key={area.id}>
//             <a href={`/area/${area.name_searchable}`}>{area.name}</a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default HomePage;