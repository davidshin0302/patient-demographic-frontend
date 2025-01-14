import React from 'react';

const PatientCard = ({ patient }) => {
  return (
    <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
      <h3>{patient.name}</h3>
      <p>Age: {patient.age}</p>
      <p>Condition: {patient.condition}</p>
    </div>
  );
};

export default PatientCard;
