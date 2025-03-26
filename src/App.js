import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PatientList from './PatientList';
import ViewPatientRecords from './ViewPatientRecords';
import Navbar from './Navbar';
import PatientRecordForm from './PatientRecordForm';
import PatientRiskLevel from './PatientRiskLevel';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="mt-3">
          <Routes>
            <Route path="/" element={<PatientList />} />
            <Route path="/patient-records" element={<ViewPatientRecords />} />
            <Route
              path="/patient-records/update"
              element={<PatientRecordForm />}
            />
            <Route path="/patient-risk-level" element={<PatientRiskLevel />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
