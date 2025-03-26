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

  const fetchPatientRiskLevelAssessment = async (endPoint) => {
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8080/assess' + endPoint);
      if (!response.ok) {
        throw new Error(`HTTp error, status: ${response.status}`);
      }
      const data = await response.text();

      setPatientRiskLevelMessage(data);
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
    let endpoint = '/';
    if (selectedId) {
      endpoint = endpoint + 'id?patId=' + selectedId;
    } else if (familyName) {
      // API call to get patientRiskLevelMessage by family name
      endpoint = endpoint + 'familyName?familyName=' + familyName;
    }

    fetchPatientRiskLevelAssessment(endpoint);
  };

  if (loading) {
    return <p>loading...</p>;
  } else {
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
            <p>{patientRiskLevelMessage}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default PatientRiskLevel;
