import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PatientList from './PatientList';
import Navbar from './Navbar';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<PatientList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
