
// // src/components/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
// import Boulder from './components/Boulder';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/area/:id" element={<Boulder />} />
//         {/* Add more routes as needed */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import { Container } from '@mui/material';
import Boulder from './pages/Boulder';
const App = () => {
    return (
      <Router>
        
            
          <MenuBar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/area/:id" element={<Boulder />} />
            {/* Add more routes as needed */}
          </Routes>

      </Router>
    );
  };
  
  export default App;