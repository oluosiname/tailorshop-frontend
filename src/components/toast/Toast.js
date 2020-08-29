import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Toast = ({ title = "Alert", body, status, closeToast }) => {
  return (
    <div
      className="toast fade show"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-toggle="toast"
    >
      <div className="toast-header">
        <div className="flex">
          <FontAwesomeIcon icon="check-circle" className="success m-right-3" />
          <h3 className="toast-title">{title}</h3>
        </div>
        <button
          type="button"
          className="toast-close"
          aria-label="Close"
          onClick={closeToast}
        >
          <FontAwesomeIcon icon="times" className="" />
        </button>
      </div>
      <div className="toast-body">{body}</div>
    </div>
  );
};

export default Toast;
