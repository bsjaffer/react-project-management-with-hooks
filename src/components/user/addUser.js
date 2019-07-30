import React, { useState } from "react";
import { useFormInput } from "../../helpers/hookHelper";
export default function AddUser() {
  const firstName = useFormInput("");
  const lastName = useFormInput("");
  const employeeId = useFormInput("");

  function onClearForm() {
    firstName.onChange({ target: { value: "" } });
    lastName.onChange({ target: { value: "" } });
    employeeId.onChange({ target: { value: "" } });
  }

  return (
    <div className="mt-5">
      <form>
        <div className="form-group row">
          <label for="staticEmail" className="col-sm-2 col-form-label">
            First Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              {...firstName}
              placeholder="Enter first name"
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="inputPassword" className="col-sm-2 col-form-label">
            Last Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              readonly
              className="form-control"
              {...lastName}
              placeholder="Enter last name"
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="inputPassword" className="col-sm-2 col-form-label">
            Employee Id
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              readonly
              className="form-control"
              {...employeeId}
              placeholder="Enter Employee Id"
            />
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-primary mr-3">
            Save
          </button>
          <button type="button" className="btn btn-light" onClick={onClearForm}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
