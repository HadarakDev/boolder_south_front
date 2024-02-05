
// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import Area from './pages/Area';

const App = () => {
    return (
      <Router>
          <MenuBar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/area/:id" element={<Area />} />
            {/* Add more routes as needed */}
          </Routes>

      </Router>
    );
  };
  
  export default App;