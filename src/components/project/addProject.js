import React, { useState } from "react";
import { useFormInput, useFormCheckbox } from "../../helpers/hookHelper";

export default function AddProject() {
  const project = useFormInput("");
  const manager = useFormInput("");
  const isSetStartDate = useFormCheckbox(false);
  const priorty = useFormInput(1);
  const startDate = useFormInput("");
  const endDate = useFormInput("");

  function onClearForm() {
    project.onChange({ target: { value: "" } });
    manager.onChange({ target: { value: "" } });
    isSetStartDate.onChange({ target: { checked: false } });
    priorty.onChange({ target: { value: 1 } });
    startDate.onChange({ target: { value: "" } });
    endDate.onChange({ target: { value: "" } });
  }
  return (
    <div className="mt-5">
      <form>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Project</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              {...project}
              placeholder="Enter Project name"
            />
          </div>
        </div>

        <div className="form-group row ">
          <label className="col-sm-2 col-form-label">Priority</label>
          <div className="col-sm-10">
            <input
              type="range"
              className="form-control"
              {...priorty}
              min="1"
              max="100"
              placeholder="Enter Project name"
            />
          </div>
        </div>

        <div className="form-group row ">
          <div className="col-sm-2" />
          <div className="col-sm-10 d-flex justify-content-start align-items-center">
            <div className="mr-2">
              <input type="checkbox" {...isSetStartDate} />
            </div>
            <div className="mr-2">Set Start and End date</div>
            <div className="mr-2">
              <input
                type="date"
                className="form-control"
                {...startDate}
                placeholder="StartDate"
              />
            </div>
            <div className="mr-2">
              <input
                type="date"
                className="form-control"
                {...endDate}
                placeholder="EndDate"
              />
            </div>
          </div>
        </div>
        <div className="form-group row ">
          <label className="col-sm-2 col-form-label">Manager</label>
          <div className="col-sm-10 d-flex ">
            <input
              type="text"
              className="form-control mr-3"
              {...manager}
              placeholder="Enter Manager name"
            />
            <button className="btn btn-primary">Search</button>
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
