import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const Profile = (props) => {
  return (
    <div className="flex profile">
      <section className="profile__nav card m-right-3">
        <div className="profile__nav__header flex ">
          <div className="">
            <img
              alt="logo"
              className="rounded-full logo m-right-5"
              src="https://midone.left4code.com/dist/images/profile-10.jpg"
            />
          </div>
          <div className="font-medium text-base">Salfaton Place</div>
        </div>
        <div className="p-top-5 p-bottom-5 profile__nav__items">
          <a className="flex" href="/">
            <FontAwesomeIcon icon="user" className="m-right-2" />
            Details
          </a>
          <a className="flex m-top-5" href="/">
            <FontAwesomeIcon icon="cog" className="m-right-2" />
            Social Networks
          </a>
          <a className="flex m-top-5" href="/">
            <FontAwesomeIcon icon="cog" className="m-right-2" />
            Account Settings
          </a>
          <NavLink
            exact
            to="/partner/account/change-password"
            className="flex m-top-5"
          >
            <FontAwesomeIcon icon="user" className="m-right-2" />
            Change Password
          </NavLink>
          <div className="dropdown-divider m-top-5"></div>
          <a className="flex m-top-5" href="/">
            <FontAwesomeIcon icon="trash" className="m-right-2" />
            Delete Account
          </a>
        </div>
      </section>
      <section className="card">{props.children}</section>
    </div>
  );
};

export default Profile;
