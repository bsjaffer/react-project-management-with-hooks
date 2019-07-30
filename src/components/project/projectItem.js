import React from "react";

export default function ProjectItem(props) {
  return (
    <div className="card mb-2">
      <div className="row">
        <div className="col-sm-8 d-flex-row justify-content-start text-left">
          <div className="m-3">Project :{props.projectName}</div>
          <div className="m-3">
            StartDate :{`${props.startDate}  ${props.lastName}`}
          </div>
          <div className="row m-3">
            <div className="col-sm p-0">No of tasks : {props.noOfTasks}</div>
            <div className="col-sm p-0">Completed : {props.completed}</div>
          </div>
          <div className="row m-3">
            <div className="col-sm p-0">StartDate : {props.startDate}</div>
            <div className="col-sm p-0">EndDate : {props.endDate}</div>
          </div>
        </div>
        <div className="col-sm-4 d-flex-row  justify-content-start">
          <div className="m-3 text-right">
            <button className="btn btn-primary">Update</button>
          </div>
          <div className="m-3 text-right">
            <button className="btn btn-secondary">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
