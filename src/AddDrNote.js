import React from 'react';

const AddDrNote = () => {
  return (
    <form>
      <fieldset>
        <div className="row">
          <div className="col-auto mr-auto">
            <label for="exampleSelect1" class="form-label mt-4">
              Example select
            </label>
            <select class="form-select" id="exampleSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="exampleTextarea" className="form-label mt-4">
              Example textarea
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
