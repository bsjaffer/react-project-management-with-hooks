import React, { Component } from "react";

export default class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      employeeId: ""
    };
  }

  onClearForm = () => {
    this.setState({
      firstName: "",
      lastName: "",
      employeeId: ""
    });
  };

  render() {
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
                value={this.state.firstName}
                onChange={e => {
                  this.setState({
                    firstName: e.target.value
                  });
                }}
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
                value={this.state.lastName}
                onChange={e => {
                  this.setState({
                    lastName: e.target.value
                  });
                }}
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
                value={this.state.employeeId}
                onChange={e => {
                  this.setState({
                    employeeId: e.target.value
                  });
                }}
                placeholder="Enter Employee Id"
              />
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button type="button" className="btn btn-primary mr-3">
              Save
            </button>
            <button
              type="button"
              className="btn btn-light"
              onClick={this.onClearForm}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }
}
