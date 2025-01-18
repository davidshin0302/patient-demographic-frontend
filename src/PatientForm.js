import React, { useState } from 'react';

const PatientForm = ({ patient, onSubmit, onCancel }) => {
  const [formData, setFormDate] = useState({
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
    setFormDate({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form>
      <fieldset>
        <div>
          <label class="col-form-label mt-4" for="inputDefault">
            Given Name
          </label>
          <input
            type="text"
            class="form-control"
            placeholder={patient.givenName}
            id="inputDefault"
          ></input>
        </div>
        <div>
          <label class="col-form-label mt-4" for="inputDefault">
            Family Name
          </label>
          <input
            type="text"
            class="form-control"
            placeholder={patient.familyName}
            id="inputDefault"
          ></input>
        </div>
        <div>
          <label class="col-form-label mt-4" for="inputDefault">
            dateOfBirth
          </label>
          <input
            type="text"
            class="form-control"
            placeholder={patient.dateOfBirth}
            id="inputDefault"
          ></input>
        </div>
        <div>
          <label class="col-form-label mt-4" for="inputDefault">
            sex
          </label>
          <input
            type="text"
            class="form-control"
            placeholder={patient.sex}
            id="inputDefault"
          ></input>
        </div>
        <div>
          <label class="col-form-label mt-4" for="inputDefault">
            home Address
          </label>
          <input
            type="text"
            class="form-control"
            placeholder={patient.homeAddress}
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
            placeholder={patient.phoneNumber}
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
