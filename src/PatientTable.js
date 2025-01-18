import React from 'react';

const PatientTable = ({ patients, onUpdate }) => {
  return (
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Patient Id</th>
          <th scope="col">Given Name</th>
          <th scope="col">Family Name</th>
          <th scope="col">Date of Birth</th>
          <th scope="col">Sex</th>
          <th scope="col">Home Address</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((patient, index) => (
          <tr class="table-light" key={index}>
            <th scope="row">{patient.id}</th>
            <td>{patient.givenName}</td>
            <td>{patient.familyName}</td>
            <td>{patient.dateOfBirth}</td>
            <td>{patient.sex}</td>
            <td>{patient.homeAddress}</td>
            <td>{patient.phoneNumber}</td>
            <td style={{ display: 'flex', gap: '8px' }}>
              <button
                type="button"
                className="btn btn-warning btn-sm"
                onClick={() => onUpdate(patient)}
              >
                Edit
              </button>
              <button type="button" className="btn btn-primary btn-sm">
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PatientTable;
