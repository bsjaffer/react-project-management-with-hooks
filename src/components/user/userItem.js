import React, { Component } from "react";

export default function userItem(props) {
  return (
    <div className="card mb-2">
      <div className="row">
        <div className="col-sm-8 d-flex-row justify-content-start text-left">
          <div className="m-3 ">
            Name :{`${props.firstName}  ${props.lastName}`}
          </div>
          <div className="m-3">EmployeeId: {props.employeeId}</div>
        </div>
        <div className="col-sm-4 d-flex-row  justify-content-start">
          <div className="m-3 text-right">
            <i className="fas fa-edit mr-2" />
            Edit
          </div>
          <div className="m-3 text-right">
            <i className="fas fa-trash mr-2" />
            Delete
          </div>
        </div>
      </div>
    </div>
  );
}
