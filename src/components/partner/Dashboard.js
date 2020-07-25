import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./dashboard.scss";

const Dashboard = ({ location }) => {
  const [expanded, setExpanded] = useState("sss");
  const toggle = (toExpand) => {
    if (expanded === toExpand) {
      setExpanded("");
    } else {
      setExpanded(toExpand);
    }
  };

  useEffect(() => {
    const name = location.pathname.split("/")[2];
    setExpanded(name);
  }, [location]);

  const isExpanded = (name) => {
    return expanded === name;
  };

  return (
    <div className="partner-app">
      <header>
        <div>Dashboard</div>
      </header>

      <main className="p-right-2 p-left-2">
        <section className="sidebar">
          <div className="sidebar__container p-3">
            <div className="sidebar__navigations">
              <NavLink exact to="/partner/dashboard" className="sidebar__link">
                <FontAwesomeIcon icon="home" className="sidebar__nav-icon" />{" "}
                Dashboard
              </NavLink>
              <div
                className="sidebar__link"
                name="jobs"
                onClick={() => toggle("jobs")}
              >
                <FontAwesomeIcon icon="tasks" className="sidebar__nav-icon" />{" "}
                <span>Jobs</span>
                <FontAwesomeIcon
                  icon={`${isExpanded("jobs") ? "angle-up" : "angle-down"}`}
                />{" "}
              </div>
              <div
                className={`sidebar-inner ${
                  isExpanded("jobs") ? "show" : "hidden"
                }`}
              >
                <NavLink
                  exact
                  to="/partner/jobs"
                  className="sidebar-inner__link"
                >
                  <span className="sidebar-inner__subnav-icon bg-orange"></span>
                  <span>All Jobs</span>
                </NavLink>
                <NavLink
                  exact
                  to="/partner/jobs/pending"
                  className="sidebar-inner__link"
                >
                  <span className="sidebar-inner__subnav-icon bg-yellow"></span>
                  <span>Pending Jobs</span>
                </NavLink>
                <NavLink
                  exact
                  to="/partner/jobs/completed"
                  className="sidebar-inner__link"
                >
                  <span className="sidebar-inner__subnav-icon bg-green"></span>
                  <span>Completed Jobs</span>
                </NavLink>
                <NavLink
                  exact
                  to="/partner/jobs/new"
                  className="sidebar-inner__link"
                >
                  <span className="sidebar-inner__subnav-icon bg-red"></span>
                  <span>New Job</span>
                </NavLink>
              </div>

              <NavLink exact to="/partner/profile" className="sidebar__link">
                <FontAwesomeIcon icon="users" className="sidebar__nav-icon" />{" "}
                Customers
              </NavLink>

              <NavLink exact to="/partner/portfolio" className="sidebar__link">
                <FontAwesomeIcon icon="folder" className="sidebar__nav-icon" />{" "}
                Portfolio
              </NavLink>

              <NavLink exact to="/partner/profile" className="sidebar__link">
                <FontAwesomeIcon
                  icon="user-tie"
                  className="sidebar__nav-icon"
                />{" "}
                Profile
              </NavLink>
            </div>
            <div className="sidebar__navigations">
              <NavLink exact to="/partner/settings" className="sidebar__link">
                <FontAwesomeIcon icon="tools" className="sidebar__nav-icon" />{" "}
                Settings
              </NavLink>

              <Link to="/logout" className="sidebar__link">
                <FontAwesomeIcon
                  icon="power-off"
                  className="sidebar__nav-icon"
                />{" "}
                Logout
              </Link>
              <NavLink exact to="/partner/help" className="sidebar__link">
                <FontAwesomeIcon
                  icon="question"
                  className="sidebar__nav-icon"
                />{" "}
                Help
              </NavLink>
            </div>
          </div>
        </section>
        <section className="content">content</section>
      </main>
    </div>
  );
};

export default Dashboard;