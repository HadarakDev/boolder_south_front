
// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuBar from './components/MenuBar';
import MenuBarFooter from './components/MenuBarFooter';
import Home from './pages/Home';
import Area from './pages/Area';
import Boulder from './pages/Boulder';
import About from './pages/About';

const App = () => {
    return (
      <Router>
          <MenuBar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/area/:id" element={<Area />} />
            <Route path="/boulder/:id" element={<Boulder />} />
            <Route path="/about" element={<About />} />
            {/* Add more routes as needed */}
          </Routes>
          <MenuBarFooter />
      </Router>
    );
  };
  
  export default App;