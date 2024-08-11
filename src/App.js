// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';
import Contact from './pages/Contact';
import Skills from './pages/Skills';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} 
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />

        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
