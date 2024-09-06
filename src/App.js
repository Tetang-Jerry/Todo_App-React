// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import Completed from './pages/Completed';


function App() {

  return (
    <div className=''>
      <Router>
      <Routes>
      <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} /> 
            <Route path="/home" element={<Home />} /> 
            <Route path="/completed" element={<Completed />} />
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
