import React from "react";
import TaskItem from "./taskItem";
export default function ProjectListing() {
  const tasks = [
    {
      taskName: "Project name",
      parentTaskName: "Parent task Name",
      startDate: "10/1/2019",
      endDate: "10/03/2019",
      priority: 5
    }
  ];
  return (
    <div className="mt-5">
      <div className="d-flex align-items-center mb-3">
        <input type="search" className="form-control" placeholder="Search" />
        <div className="col-sm-6 d-flex align-items-center">
          <div className="mr-2">Sort By :</div>
          <nav class="nav nav-pills flex-column flex-sm-row">
            <a class="flex-sm-fill text-sm-center nav-link active" href="#">
              StartDate
            </a>
            <a class="flex-sm-fill text-sm-center nav-link" href="#">
              EndDate
            </a>
            <a class="flex-sm-fill text-sm-center nav-link" href="#">
              Priority
            </a>
            <a class="flex-sm-fill text-sm-center nav-link" href="#">
              Completed
            </a>
          </nav>
        </div>
      </div>
      {tasks.map(task => {
        return <TaskItem {...task} />;
      })}
    </div>
  );
}
