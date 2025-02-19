import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
                <h6 className="card-title">Patient Record #{index + 1}</h6>{' '}
                <div className="list-group">
                  <Link
                    className="list-group-item ..."
                    to={{
                      pathname: `/patient-records/update`,
                      search: `?patId=${patientRecord.patId}&index=${index}&note=${encodeURIComponent(clinicalNote.note)}`, // Keep this for patId as good practice
                    }}
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <div className="col-md-9">
                        <p class="mb-1 text-break">{clinicalNote.note}</p>
                      </div>
                      <small className="text-muted">
                        <small class="text-muted">{clinicalNote.date}</small>
                      </small>
                    </div>
                  </Link>
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
