import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./dashboard.scss";

const Dashboard = (props) => {
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
                {/* <div className="sidebar__nav-icon bg"></div> */}
                <FontAwesomeIcon
                  icon="home"
                  className="sidebar__nav-icon"
                />{" "}
                Dashboard
              </NavLink>
              <NavLink exact to="/partner/jobs" className="sidebar__link">
                {/* <span className="sidebar__nav-icon bg"></span> */}
                <FontAwesomeIcon
                  icon="tasks"
                  className="sidebar__nav-icon"
                />{" "}
                <span>Jobs</span>
              </NavLink>
              <div>
                <NavLink exact to="/partner/jobs" className="sidebar__link">
                  {/* <span className="sidebar__nav-icon bg"></span> */}
                  <FontAwesomeIcon
                    icon="tasks"
                    className="sidebar__nav-icon"
                  />{" "}
                  <span>All Jobs</span>
                </NavLink>
                <NavLink exact to="/partner/jobs" className="sidebar__link">
                  {/* <span className="sidebar__nav-icon bg"></span> */}
                  <FontAwesomeIcon
                    icon="tasks"
                    className="sidebar__nav-icon"
                  />{" "}
                  <span>Pending Jobs</span>
                </NavLink>
                <NavLink exact to="/partner/jobs" className="sidebar__link">
                  {/* <span className="sidebar__nav-icon bg"></span> */}
                  <FontAwesomeIcon
                    icon="tasks"
                    className="sidebar__nav-icon"
                  />{" "}
                  <span>Completed Jobs</span>
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
              <Link exact to="/partner/profile" className="sidebar__link">
                <FontAwesomeIcon icon="tools" className="sidebar__nav-icon" />{" "}
                Settings
              </Link>

              <Link exact to="/partner/profile" className="sidebar__link">
                <FontAwesomeIcon
                  icon="power-off"
                  className="sidebar__nav-icon"
                />{" "}
                Logout
              </Link>
              <Link exact to="/partner/profile" className="sidebar__link">
                <FontAwesomeIcon
                  icon="question"
                  className="sidebar__nav-icon"
                />{" "}
                Help
              </Link>
            </div>
          </div>
        </section>
        <section className="content">content</section>
      </main>
    </div>
  );
};

export default Dashboard;
