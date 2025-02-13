import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PatientList from './PatientList';
import ViewPatientRecords from './ViewPatientRecords';
import Navbar from './Navbar';
import PatientRecordForm from './PatientRecordForm';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<PatientList />} />
          <Route path="/patient-records" element={<ViewPatientRecords />} />
          <Route
            path="/patient-records/update/:id"
            element={<PatientRecordForm />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
