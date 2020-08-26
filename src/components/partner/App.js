import React, { useState, useEffect } from "react";

import "./app.scss";
import Header from "./Header";
const App = (props) => {
  const [showSideBar, setshowSideBar] = useState(false);

  useEffect(() => {
    setshowSideBar(false);
  }, []);

  return (
    <div className="partner-app">
      <Header setshowSideBar={setshowSideBar} showSideBar={showSideBar} />
      <main className="p-right-2 p-left-2">
        {/* <section className={`sidebar ${showSideBar ? "show" : ""}`}>
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
              <NavLink exact to="/partner/jobs" className="sidebar__link">
                <FontAwesomeIcon icon="tasks" className="sidebar__nav-icon" />{" "}
                Jobs
              </NavLink>

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
        </section> */}
        <section className="content">{props.children}</section>
      </main>
      <div className={`overlay ${showSideBar ? "show" : ""}`}></div>
    </div>
  );
};

export default App;
