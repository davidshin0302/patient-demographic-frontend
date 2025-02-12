import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PatientList from './PatientList';
import ViewPatientRecords from './ViewPatientRecords';
import Navbar from './Navbar';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<PatientList />} />
          <Route path="/patient-records" element={<ViewPatientRecords />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
