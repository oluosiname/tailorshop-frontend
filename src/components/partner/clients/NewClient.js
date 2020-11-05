import React from "react";
import Form from "./Form";
import { string, number } from "yup";

const NewClient = ({ history, handleCancel, createClient }) => {
  const fields = {
    firstName: "",
    lastName: "",
    gender: "",
    phoneNumber: "",
  };

  const schema = {
    firstName: string().required("Please enter client's first name"),
    lastName: string(),
    gender: string().required("Please select a gender"),
    phoneNumber: number()
      .typeError("Phone number should contain only numbers")
      .required("Please enter client's phone number"),
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
          schema={schema}
        />
      </div>
    </section>
  );
};

export default NewClient;
