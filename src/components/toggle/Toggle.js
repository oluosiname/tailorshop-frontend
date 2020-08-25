import React from "react";
import "./style.scss";

const Toggle = ({ onChange, checked }) => {
  return (
    <label className="toggle-control" data-testid="toggle-primary-address">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="control"></span>
    </label>
  );
};

export default Toggle;
