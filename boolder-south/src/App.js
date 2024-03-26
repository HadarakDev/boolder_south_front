
// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuBar from './components/MenuBar';
import MenuBarFooter from './components/MenuBarFooter';
import Home from './pages/Home';
import Area from './pages/Area';
import Boulder from './pages/Boulder';
import About from './pages/About';
import Map from './pages/Map';

const App = () => {
    return (
      <Router>
          <MenuBar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/area/:id" element={<Area />} />
            <Route path="/:area_name_searchable/:name_searchable/:id" element={<Boulder />} />
            <Route path="/about" element={<About />} />
            <Route path="/map" element={<Map />} />
            {/* Add more routes as needed */}
          </Routes>
          <MenuBarFooter />
      </Router>
    );
  };
  
  export default App;