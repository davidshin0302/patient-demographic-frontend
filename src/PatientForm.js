import React, { useState } from 'react';

const PatientForm = ({ patient, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    id: patient.id || '',
    givenName: patient.givenName || '',
    familyName: patient.familyName || '',
    dateOfBirth: patient.dateOfBirth || '',
    sex: patient.sex || '',
    homeAddress: patient.homeAddress || '',
    phoneNumber: patient.phoneNumber || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSubmit(formData);
      window.location.href = `/patients`;
    } catch (error) {
      console.error('Error Submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <div>
          <label class="col-form-label mt-4" for="inputDefault">
            Given Name
          </label>
          <input
            type="text"
            class="form-control"
            name="givenName"
            value={formData.givenName}
            onChange={handleChange}
            id="inputDefault"
            required
          ></input>
        </div>
        <div>
          <label class="col-form-label mt-4" for="inputDefault">
            Family Name
          </label>
          <input
            type="text"
            class="form-control"
            name="familyName"
            value={formData.familyName}
            onChange={handleChange}
            id="inputDefault"
            required
          ></input>
        </div>
        <div>
          <label class="col-form-label mt-4" for="inputDefault">
            dateOfBirth
          </label>
          <input
            type="text"
            class="form-control"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            id="inputDefault"
            required
          ></input>
        </div>
        <div>
          <label class="col-form-label mt-4" for="inputDefault">
            sex
          </label>
          <input
            type="text"
            class="form-control"
            name="sex"
            value={formData.sex}
            onChange={handleChange}
            id="inputDefault"
            required
          ></input>
        </div>
        <div>
          <label class="col-form-label mt-4" for="inputDefault">
            home Address
          </label>
          <input
            type="text"
            class="form-control"
            name="homeAddress"
            value={formData.homeAddress}
            onChange={handleChange}
            id="inputDefault"
          ></input>
        </div>
        <div>
          <label class="col-form-label mt-4" for="inputDefault">
            phone Number
          </label>
          <input
            type="text"
            class="form-control"
            name="phoneNUmber"
            value={formData.phoneNumber}
            onChange={handleChange}
            id="inputDefault"
          ></input>
        </div>
      </fieldset>
      <fieldset class="mt-4" style={{ display: 'flex', gap: '8px' }}>
        <button type="submit" class="btn btn-info">
          Submit
        </button>
        <button type="button" class="btn btn-light" onClick={onCancel}>
          Cancel
        </button>
      </fieldset>
    </form>
  );
};

export default PatientForm;
