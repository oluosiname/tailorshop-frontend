import React from "react";
import Form from "./Form";

const NewClient = ({ history, handleCancel, createClient }) => {
  const fields = {
    firstName: "",
    lastName: "",
    gender: "",
    phoneNumber: "",
  };

  return (
    <section className="card new-client-container">
      <div className="card__header">
        <div className="card__header__title">Add a new Customer</div>
      </div>
      <div className="card__body">
        <Form
          handleSubmit={createClient}
          fields={fields}
          handleCancel={handleCancel}
        />
      </div>
    </section>
  );
};

export default NewClient;
