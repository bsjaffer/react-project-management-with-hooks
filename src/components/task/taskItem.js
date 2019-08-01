import React from "react";

export default function TaskItem(props) {
  return (
    <div className="card mb-2">
      <div className="row">
        <div className="col-sm-3 d-flex-row justify-content-start text-left">
          <div className="m-3">
            <b>Task :</b>
          </div>
          <div className="m-3">{props.taskName}</div>
        </div>
        <div className="col-sm-3 d-flex-row justify-content-start text-left">
          <div className="m-3">
            <b>Parent :</b>
          </div>
          <div className="m-3">{props.parentTaskName}</div>
        </div>
        <div className="col-sm-4 d-flex-row justify-content-start text-left">
          <div className="row m-3">
            <div className="col-sm p-0">
              <b>Priority : </b>
              {props.priority}
            </div>
          </div>
          <div className="row m-3">
            <div className="col-sm p-0">
              <b>StartDate : </b>
              {props.startDate}
            </div>
          </div>
          <div className="row m-3">
            <div className="col-sm p-0">
              <b>EndDate : </b>
              {props.endDate}
            </div>
          </div>
        </div>
        <div className="col-sm-2 d-flex-row  justify-content-start">
          <div className="m-3 text-right">
            <button className="btn btn-primary">Edit</button>
          </div>
          <div className="m-3 text-right">
            <button className="btn btn-secondary">End Task</button>
          </div>
        </div>
      </div>
    </div>
  );
}
