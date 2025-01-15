import React, { useEffect, useState } from 'react';
import PatientCard from './PatientCard';

const PatientList = () => {
  const [patients, setPatiens] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/patient/data')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setPatiens(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error while fetching: ', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <div>
      <h2>Patient List</h2>
      <div className="patient-list">
        {patients.map((patient) => (
          <PatientCard key={patient.id} patient={patient} />
        ))}
      </div>
    </div>
  );
};

export default PatientList;
