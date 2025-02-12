import React, { useEffect, useState } from 'react';

const ViewPatientRecords = () => {
  const [patientRecords, setPatientRecords] = useState([]);
  const [loading, setLoading] = useState(true);

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
      console.log(data.patientRecords);

      setPatientRecords(data.patientRecords);
    } catch (error) {
      console.log('Error while fetching: ', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>loading...</p>;
  } else {
    return (
      <div>
        {patientRecords.map((patientRecord) => (
          <div
            key={patientRecord.patId}
            className="card border-primary mb-3"
            style={{ maxWidth: '70rem' }}
          >
            <div className="card-header">Patient ID: {patientRecord.patId}</div>
            {patientRecord.clinicalNotes.map((clinicalNote, index) => (
              <div key={index} className="card-body">
                <h6 className="card-title">Note {index + 1}</h6>{' '}
                <div className="list-group">
                  <a
                    href="#"
                    className="list-group-item list-group-item-action flex-column align-items-start"
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <p class="mb-1">{clinicalNote.note}</p>
                      <small className="text-muted">
                        <small class="text-muted">{clinicalNote.date}</small>
                      </small>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
};

export default ViewPatientRecords;
