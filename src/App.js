import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PatientList from './PatientList';
import AddDrNote from './AddDrNote';
import Navbar from './Navbar';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<PatientList />} />
          <Route path="/drnotes" element={<AddDrNote />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
