import React, { useEffect, useState } from 'react';

const PatientRiskLevel = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [patientRecords, setPatientRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [familyName, setFamilyName] = useState('');
  const [patientRiskLevelMessage, setPatientRiskLevelMessage] = useState('');

  useEffect(() => {
    fetchPatientRecord();
  }, []);

  const fetchPatientRecord = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        'http://localhost:8082/patHistory/get/patient-records'
      );
      if (!response.ok) {
        throw new Error(`HTTp error, status: ${response.status}`);
      }
      const data = await response.json();

      setPatientRecords(data.patientRecords);
    } catch (error) {
      console.log('Error while fetching: ', error);
    } finally {
      setLoading(false);
    }
  };

  const handleIdChange = (event) => {
    setSelectedId(event.target.value);
  };

  const handleFamilyNameChange = (event) => {
    setFamilyName(event.target.value);
  };

  const handleSearch = () => {
    if (selectedId) {
      // API call to get patientRiskLevelMessage by id
      setPatientRiskLevelMessage(
        'patientRiskLevelMessage  based of id: ' + selectedId
      );
    } else if (familyName) {
      // API call to get patientRiskLevelMessage by family name
      setPatientRiskLevelMessage(
        'patientRiskLevelMessage  based of family name: ' + familyName
      );
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <select className="form-select" onChange={handleIdChange}>
            <option value="">Select ID</option>
            {patientRecords.map((patientRecord) => (
              <option key={patientRecord.patId} value={patientRecord.patId}>
                {patientRecord.patId}
              </option>
            ))}
          </select>
          <input
            type="text"
            className="form-control mt-2"
            placeholder="Family Last Name"
            onChange={handleFamilyNameChange}
          />
          <button className="btn btn-primary mt-2" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <p>{'Hello'}</p>
        </div>
      </div>
    </div>
  );
};

export default PatientRiskLevel;
