import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function MenuJira() {
  const navigate = useNavigate();
  return (
    <div className="menu">
      <div className="account">
        <div className="avatar">
          <img src={require("../../assets/img/download.jfif")} alt />
        </div>
        <div className="account-info">
          <p>CyberLearn.vn</p>
          <p>Report bugs</p>
        </div>
      </div>
      <div className="control">
        <div>
          <i className="fa fa-credit-card" />
          <NavLink to="/" activeClassName="active">Cyber Board</NavLink>
          {/* <span onClick={() => navigate("/")}>Cyber Board</span> */}
        </div>
        <div>
          <i className="fa fa-cog" />
          <NavLink to="/createproject" activeClassName="active">Create project</NavLink>
          {/* <span onClick={() => navigate("/createproject")}>Create project</span> */}
        </div>
      </div>
      <div className="feature">
        <div>
          <i className="fa fa-truck" />
          <span>Releases</span>
        </div>
        <div>
          <i className="fa fa-equals" />
          <span>Issues and filters</span>
        </div>
        <div>
          <i className="fa fa-paste" />
          <span>Pages</span>
        </div>
        <div>
          <i className="fa fa-location-arrow" />
          <span>Reports</span>
        </div>
        <div>
          <i className="fa fa-box" />
          <span>Components</span>
        </div>
      </div>
    </div>
  );
}
