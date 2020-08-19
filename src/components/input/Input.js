import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const Input = ({ label, type, placeholder, name, onChange, icon }) => {
  return (
    <div className="form-group">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        className="form-control"
        id={name}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />{" "}
      <div className="form-group__icon">{icon}</div>
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
