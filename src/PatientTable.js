import React from 'react';
import Table from 'react-bootstrap/Table';

const PatientTable = ({ patients }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Given Name</th>
          <th>Family Name</th>
          <th>Date of Birth</th>
          <th>Sex</th>
          <th>Home Address</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((patient, index) => (
          <tr key={index}>
            {' '}
            {/* Important: Add a unique key */}
            <td>{patient.givenName}</td>
            <td>{patient.familyName}</td>
            <td>{patient.dateOfBirth}</td>
            <td>{patient.sex}</td>
            <td>{patient.homeAddress}</td>
            <td>{patient.phoneNumber}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default PatientTable;
