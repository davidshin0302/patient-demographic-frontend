import React, { useEffect, useState } from 'react';

const AddDrNote = () => {
  const [drNotes, setDrNotes] = useState([]);

  useEffect(() => {
    fetchDrNotes();
  });

  const fetchDrNotes = async () => {
    try {
      const response = await fetch(
        'http://localhost:8082/patHistory/get/doctornotes'
      );
      if (!response.ok) {
        throw new Error(`HTTp error, status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setDrNotes(data.doctorNotes);
    } catch (error) {
      console.log('Error while fetching: ', error);
    }
  };

  return (
    <form>
      <fieldset>
        <div className="row">
          <div className="col-auto mr-auto">
            <label for="exampleSelect1" class="form-label mt-4">
              List of Patient IDs
            </label>
            <select class="form-select" id="exampleSelect1">
              {drNotes.map((drNote, index) => (
                <option>{drNote.patId}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="exampleTextarea" className="form-label mt-4">
              Enter Patient Notes
            </label>
            <textarea
              className="form-control"
              id="exampleTextarea"
              rows="3"
            ></textarea>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </fieldset>
    </form>
  );
};

export default AddDrNote;
