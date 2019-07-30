import React, { Component } from "react";
import AddProject from "../components/project/addProject";
import ProjectListing from "../components/project/projectListing";

export default function ProjectPage() {
  return (
    <div className="mt-5">
      <AddProject />

      <ProjectListing />
    </div>
  );
}
