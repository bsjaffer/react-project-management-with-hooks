import React from "react";
import AddUser from "../components/user/addUser";
import UserListing from "../components/user/userListing";

export default function UserPage() {
  return (
    <div className="mt-5">
      <AddUser />
      <UserListing />
    </div>
  );
}
