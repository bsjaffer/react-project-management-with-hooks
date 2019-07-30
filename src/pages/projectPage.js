import React, { Component } from "react";
import AddUser from "../components/user/addUser";
import UserListing from "../components/user/userListing";
export default class ProjectPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mt-5">
        <AddUser />

        <UserListing />
      </div>
    );
  }
}
