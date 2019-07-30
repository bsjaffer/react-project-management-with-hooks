import React, { Component } from "react";
import UserItem from "./userItem.js";

export default class UserListing extends Component {
  render() {
    const users = [
      {
        firstName: "Pavan",
        lastName: "lastname",
        employeeId: "001"
      },
      {
        firstName: "Pavan",
        lastName: "lastname",
        employeeId: "002"
      }
    ];
    return (
      <div className="mt-5">
        <div className="d-flex align-items-center mb-3">
          <input type="search" className="form-control" placeholder="search" />
          <div className="col-sm-6 d-flex align-items-center">
            <div className="mr-2">Sort By :</div>
            <nav class="nav nav-pills flex-column flex-sm-row">
              <a class="flex-sm-fill text-sm-center nav-link active" href="#">
                FirstName
              </a>
              <a class="flex-sm-fill text-sm-center nav-link" href="#">
                LastName
              </a>
              <a class="flex-sm-fill text-sm-center nav-link" href="#">
                EmployeeId
              </a>
            </nav>
          </div>
        </div>
        {users.map(user => {
          return <UserItem user={user} />;
        })}
      </div>
    );
  }
}
