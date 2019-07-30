import React, { useState } from "react";
import { useFormInput, useFormCheckbox } from "../../helpers/hookHelper";
export default function AddTask() {
  const project = useFormInput("");
  const taskName = useFormInput("");
  const isParentTask = useFormCheckbox(false);
  const priorty = useFormInput(1);
  const startDate = useFormInput("");
  const endDate = useFormInput("");
  const user = useFormInput("");
  const parentTask = useFormInput("");

  function onClearForm() {
    project.onChange({ target: { value: "" } });
    taskName.onChange({ target: { value: "" } });
    isParentTask.onChange({ target: { checked: false } });
    priorty.onChange({ target: { value: 1 } });
    startDate.onChange({ target: { value: "" } });
    endDate.onChange({ target: { value: "" } });
    user.onChange({ target: { value: "" } });
    parentTask.onChange({ target: { value: "" } });
  }
  return (
    <div className="mt-5">
      <form>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Project</label>
          <div className="col-sm-10 d-flex ">
            <input
              type="text"
              className="form-control mr-3"
              {...project}
              placeholder="Enter Project name"
            />
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Task</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              {...taskName}
              placeholder="Enter task name"
            />
          </div>
        </div>
        <div className="form-group row ">
          <div className="col-sm-2" />
          <div className="col-sm-10 d-flex justify-content-start align-items-center">
            <input type="checkbox" className="mr-3" {...isParentTask} />
            <label className="mb-0"> Is Parent task </label>
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

        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Parent Task</label>
          <div className="col-sm-10 d-flex ">
            <input
              type="text"
              className="form-control mr-3"
              {...parentTask}
              placeholder="Enter Manager name"
            />
            <button className="btn btn-primary">Search</button>
          </div>
        </div>

        <div className="form-group row ">
          <label className="col-sm-2 col-form-label">StartDate</label>
          <div className="col-sm-10 d-flex justify-content-start align-item-center">
            <input
              type="date"
              className="form-control"
              {...startDate}
              placeholder="StartDate"
            />
            <label className="col-sm-2 col-form-label">EndDate</label>

            <input
              type="date"
              className="form-control"
              {...endDate}
              placeholder="StartDate"
            />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-sm-2 col-form-label">User</label>
          <div className="col-sm-10 d-flex ">
            <input
              type="text"
              className="form-control mr-3"
              {...user}
              placeholder="Enter User"
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
