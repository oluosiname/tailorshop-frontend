import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";

const Header = ({ setshowSideBar, showSideBar }) => {
  return (
    <React.Fragment>
      <div className="mobile-header">
        <FontAwesomeIcon
          icon="bars"
          className="toggle-sidebar"
          onClick={() => setshowSideBar((prev) => !prev)}
        />{" "}
      </div>

      <header className={`${showSideBar ? "show" : ""}`}>
        <div className="flex container">
          <div className="logo">
            <img src={logo} alt="logo" style={{ height: "35px" }} />
            <FontAwesomeIcon
              icon="times"
              className="toggle-sidebar hide-sidebar clearfix "
              onClick={() => setshowSideBar((prev) => !prev)}
            />{" "}
          </div>
          <nav>
            <ul className="flex">
              <li>
                {" "}
                <NavLink
                  exact
                  to="/partner/dashboard"
                  className="nav-link"
                  onClick={() => setshowSideBar(false)}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-link">Jobs</li>
              <li>
                <NavLink
                  exact
                  to="/partner/clients"
                  className="nav-link"
                  onClick={() => setshowSideBar(false)}
                >
                  Clients
                </NavLink>
              </li>
              <li className="nav-link">Portfolio</li>
              <li className="nav-link not-mobile">Account</li>
              <li className="nav-link mobile">Profile</li>
              <li className="nav-link mobile">Settings</li>
              <li className="nav-link mobile">Sign Out</li>
            </ul>
          </nav>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
