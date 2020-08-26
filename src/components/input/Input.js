import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const Input = ({ label, type, placeholder, name, onChange, icon = false }) => {
  return (
    <div className="form-group">
      {label && <label htmlFor={name}>{label}</label>}
      <div className="form-group__icon">{icon}</div>
      <input
        type={type}
        className={`form-control ${icon ? "with-icon" : ""}`}
        id={name}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />{" "}
      {/* <small id="emailHelp" class="form-text text-muted"> We'll neve</small> */}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  label: null,
  placeholder: "",
  type: "text",
};

export default Input;
