import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import UserPage from "./pages/userPage";
import ProjectPage from "./pages/projectPage";

function App() {
  const [page, setPage] = useState("user");

  const navItem = [
    {
      key: "project",
      text: "Add Project"
    },
    {
      key: "task",
      text: "Add Task"
    },
    {
      key: "user",
      text: "Add User"
    },
    {
      key: "viewtask",
      text: "View Task"
    }
  ];
  return (
    <div className="App">
      <div className="container">
        <h1 className="mb-3 ">Project Manager</h1>
        <ul className="nav nav-tabs">
          {navItem.map(item => {
            return (
              <li
                className="nav-item"
                onClick={() => {
                  setPage(item.key);
                }}
              >
                <a
                  className={`nav-link ${page === item.key ? "active" : ""}`}
                  href="#"
                >
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
        {page === "user" && <UserPage />}
        {page === "project" && <ProjectPage />}
        {page === "task" && <UserPage />}
        {page === "viewtask" && <UserPage />}
      </div>
    </div>
  );
}

export default App;
