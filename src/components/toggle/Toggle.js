import React from "react";
import "./style.scss";
import { useState } from "react";

const Toggle = ({ onChange, checked }) => {
  return (
    <label className="toggle-control">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="control"></span>
    </label>
  );
};

export default Toggle;
