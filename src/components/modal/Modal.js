import React from "react";
import "./style.scss";

const Modal = (props) => {
  // let { modalContent, handleModal, modal } = React.useContext(ModalContext);

  return (
    <div
      className={`modal${props.showClientModal ? " show" : ""}`}
      id="delete-modal-preview"
    >
      <div className="modal__content">
        <div className="text-center">
          <i className="far fa-times-circle"></i>
          <p>Are you sure you want to delete this record?</p>
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
