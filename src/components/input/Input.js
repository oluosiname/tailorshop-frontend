import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const Input = ({ label, type, placeholder }) => {
  return (
    <div className="form-group">
      {label && <label htmlFor="exampleInputEmail1">{label}</label>}
      <input
        type={type}
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder={placeholder}
      />{" "}
      {/* <small id="emailHelp" class="form-text text-muted">
    We'll never share your email with anyone else.
  </small> */}
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
