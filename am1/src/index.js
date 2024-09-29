/*
File name:      index.js
Student's Name: Cheuk Man Edmond To
Student ID:     301378748
Date:           Sep 28, 2024
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Import Bootstrap JavaScript
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import React Router

import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Service from './components/Service';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
