import React from "react";

export default function SidebarJira() {
  return (
    <div className="sideBar">
      <div className="sideBar-top">
        <div className="sideBar-icon">
          <i className="fab fa-jira" />
        </div>
        <div
          className="sideBar-icon"
          data-toggle="modal"
          data-target="#searchModal"
          style={{ cursor: "pointer" }}
        >
          <i className="fa fa-search" />
          <span className="title">Search</span>
        </div>
        <div className="sideBar-icon">
          <i className="fa fa-plus" />
          <span className="title">Create Task</span>
        </div>
      </div>
      <div className="sideBar-bottom">
        <div className="sideBar-icon">
          <i className="fa fa-question-circle" />
          <span className="title">ABOUT</span>
        </div>
      </div>
    </div>
  );
}
