import React, { useEffect, useState } from 'react';
import PatientTable from './PatientTable';

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect to fetch data on component mount (for the "Read" operation)
  useEffect(() => {
    fetchPatientList();
  }, []);

  //Fetch Patient List from backend service
  const fetchPatientList = async () => {
    let isLoading = true;

    try {
      const response = await fetch('http://localhost:8081/patient/data');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setPatients(data.patientList);
      isLoading = false;
    } catch (error) {
      console.log('Error while fetching: ', error);
      isLoading = false;
    }

    setLoading(isLoading);
  };

  //Update Patient
  const updatePatient = () => {};

  //Delete Patient
  const deletePatient = () => {};

  if (loading) {
    return <p>loading...</p>;
  } else {
    return (
      <div>
        <h2>Patient List</h2>
        <div className="patient-list">
          <PatientTable patients={patients} />
        </div>
      </div>
    );
  }
};

export default PatientList;
