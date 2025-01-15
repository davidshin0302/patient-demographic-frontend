import React from 'react';

const PatientCard = ({ patient }) => {
  console.log('This is the partient card', patient);
  return (
    <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
      <h3>Patient List</h3>
      <p>Id: {patient.id}</p>
      <p>Given Name: {patient.givenName}</p>
      <p>Family Name: {patient.familyName}</p>
    </div>
  );
};

export default PatientCard;
