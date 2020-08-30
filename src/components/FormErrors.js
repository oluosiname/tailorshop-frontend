import React from "react";

const FormErrors = ({ errors }) => {
  return (
    <div className="invalid-tooltip">
      {errors.map((e) => (
        <li>{e}</li>
      ))}
    </div>
  );
};

export default FormErrors;
