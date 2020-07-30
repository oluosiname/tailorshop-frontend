import React from "react";

import Input from "../../input/Input.js";
import "../dashboard.scss";
import "./clients.scss";

const Clients = ({ location }) => {
  return (
    <section className="content">
      <div
        className="p-right-2 p-left-2 p-bottom-5 m-bottom-5"
        style={{ border: "2px solid red" }}
      >
        <Input label={"Email"} placeholder={"Enter email"}></Input>
      </div>
      <div
        style={{
          border: "1px solid purple",
          minHeight: 960,
          background: "#fff",
        }}
      ></div>
    </section>
  );
};

export default Clients;
