import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./assets/css/Banner.css"
import "./assets/css/MenuBar.css"
import "./assets/css/Carrousel.css"
import "./assets/css/Area.css"
import "./assets/css/Boulder.css"
import "./assets/css/About.css"
import 'mapbox-gl/dist/mapbox-gl.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
