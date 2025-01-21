import React, { useEffect, useState } from 'react';
import PatientTable from './PatientTable';
import PatientForm from './PatientForm';

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingPatient, setEditingPatient] = useState(null);

  // useEffect to fetch data on component mount (for the "Read" operation)
  useEffect(() => {
    fetchPatientList();
  }, []);

  //Fetch Patient List from backend service
  const fetchPatientList = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8081/patient');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPatients(data.patientList);
    } catch (error) {
      console.log('Error while fetching: ', error);
    } finally {
      setLoading(false);
    }
  };

  //Update Patient
  const updatePatient = async (updatePatient) => {
    console.log(updatePatient);
    try {
      const response = await fetch(
        `http://localhost:8081/patient/${updatePatient.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatePatient),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      fetchPatientList();
    } catch (error) {
      console.log('Error updating patients:', error);
    }
  };

  //Delete Patient
  const deletePatient = () => {};

  if (loading) {
    return <p>loading...</p>;
  } else {
    return (
      <div>
        <h2>Patient List</h2>
        {editingPatient ? (
          <PatientForm
            patient={editingPatient}
            onSubmit={updatePatient}
            onCancel={() => setEditingPatient(null)}
          />
        ) : (
          <PatientTable
            patients={patients}
            onUpdate={(patient) => setEditingPatient(patient)}
          />
        )}
      </div>
    );
  }
};

export default PatientList;
