import React, { useState } from "react";
import Form from "./Form";
import api from "../../../api";
import snakeize from "../../../utilities/snakeize";

const NewClient = ({ history }) => {
  const fields = {
    firstName: "",
    lastName: "",
    gender: "",
    phoneNumber: "",
  };

  const handleSubmit = async (client) => {
    try {
      await api.post(
        "/partners/customers",

        {
          customer: snakeize(client),
        }
      );

      history.push("/partner/clients");
    } catch (e) {
      throw e;
    }
  };
  return (
    <section className="card new-client-container">
      <div className="card__header">
        <div className="card__header__title">Add a new Customer</div>
      </div>
      <div className="card__body">
        <Form handleSubmit={handleSubmit} fields={fields} />
      </div>
    </section>
  );
};

export default NewClient;
