import React from 'react';
import PatientCard from './PatientCard';

const patients = [
  { id: 1, name: 'John Doe', age: 30, condition: 'Flu' },
  { id: 2, name: 'Jane Smith', age: 25, condition: 'Migraine' },
  { id: 3, name: 'Sam Wilson', age: 40, condition: 'Allergy' },
];

const PatientList = () => {
  return (
    <div>
      <h2>Patient List</h2>
      <div>
        {patients.map((patient) => (
          <PatientCard key={patient.id} patient={patient} />
        ))}
      </div>
    </div>
  );
};

export default PatientList;
