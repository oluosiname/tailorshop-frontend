import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import brand from "../../images/18867251.jpg";

import "./app.scss";
const App = (props) => {
  const [expanded, setExpanded] = useState("");
  const [showSideBar, setshowSideBar] = useState(false);
  let location = useLocation();
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
    setshowSideBar(false);
  }, [location]);

  const isExpanded = (name) => {
    return expanded === name;
  };

  return (
    <div className="partner-app">
      <header>
        <FontAwesomeIcon
          icon="ellipsis-v"
          className="toggle-sidebar"
          onClick={() => setshowSideBar((prev) => !prev)}
        />{" "}
        <div className="flex">
          <img
            src="https://blu.qodeinteractive.com/wp-content/uploads/2016/10/logo-blu.png"
            alt="logo"
            style={{ height: "20px", float: "left" }}
          />
          <nav>
            <ul className="flex">
              <li>Home</li>
              <li>Jobs</li>
              <li>Portfolio</li>
              <li>Invite Someone</li>
              <li>Account</li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="p-right-2 p-left-2">
        <section className={`sidebar ${showSideBar ? "show" : ""}`}>
          <div className="sidebar__container p-3">
            <div
              className="sidebar__brand p-right-2 p-left-2"
              style={{
                height: "50px",
              }}
            >
              <img style={{ width: "50px" }} src={brand} alt="brand" />
            </div>
            <FontAwesomeIcon
              icon="times"
              className="toggle-sidebar hide-sidebar clearfix "
              onClick={() => setshowSideBar((prev) => !prev)}
            />{" "}
            <div className="clearfix"></div>
            <div className="sidebar__navigations">
              <NavLink exact to="/partner/dashboard" className="sidebar__link">
                <FontAwesomeIcon icon="home" className="sidebar__nav-icon" />{" "}
                Home
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

              <NavLink exact to="/partner/clients" className="sidebar__link">
                <FontAwesomeIcon icon="users" className="sidebar__nav-icon" />{" "}
                Clients
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
        <section className="content">{props.children}</section>
      </main>
      <div className={`overlay ${showSideBar ? "show" : ""}`}></div>
    </div>
  );
};

export default App;
