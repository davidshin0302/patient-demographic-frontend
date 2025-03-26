import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const PatientRecordForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [index, setIndex] = useState(null);
  const [patId, setPatId] = useState(null);
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const patId = searchParams.get('patId');
    const index = searchParams.get('index');
    const clinicalNote = searchParams.get('note');
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().slice(0, 10);

    if (!patId) {
      return navigate('/patient-records'); // Redirect if patId is missing
    }

    setFormData({
      date: formattedDate,
      note: decodeURIComponent(clinicalNote),
    });
    setPatId(patId);
    setIndex(index);
  }, [searchParams, navigate]);

  if (formData === null) {
    return <div>Loading...</div>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = `http://localhost:8082/patHistory/update/${encodeURIComponent(patId)}?index=${encodeURIComponent(index)}`;
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json(); // Try to get error details from the server
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${errorData.message || response.statusText}`
        );
      }
      const data = await response.json();
      navigate('/patient-records');
    } catch (error) {
      console.error('Error updating patient record:', error);
      alert(error.message);
    }
  };

  const handleCancel = () => {
    navigate('/patient-records');
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <div>
          <label className="col-form-label mt-4" htmlFor="patId">
            Patient Id:
          </label>
          <input
            type="text"
            className="form-control"
            name="patId"
            value={patId || ''}
            id="patId"
            onChange={() => console.log()}
            required
          />
        </div>
        <div>
          <label for="exampleTextarea" class="form-label mt-4">
            Patient Record Note
          </label>
          <textarea
            type="text"
            class="form-control"
            id="note"
            rows="3"
            name="note"
            value={formData.note || ''}
            onChange={handleChange}
          ></textarea>
        </div>
      </fieldset>
      <fieldset className="mt-4" style={{ display: 'flex', gap: '8px' }}>
        <button type="submit" className="btn btn-info">
          Submit
        </button>
        <button type="button" className="btn btn-light" onClick={handleCancel}>
          Cancel
        </button>
      </fieldset>
    </form>
  );
};

export default PatientRecordForm;
