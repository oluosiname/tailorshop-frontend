import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ClientRow = ({ client }) => {
  return (
    <div className="flex client client__row">
      <div className="client__avatar">
        <FontAwesomeIcon icon="user-tie" />
      </div>

      <div className="client__name">
        {client.first_name} {client.last_name}
      </div>

      <div className="client__address">
        <span>{client.address}</span>
      </div>

      <div className="client__phone">
        <span style={{ letterSpacing: "1px" }}>{client.phone_number}</span>
      </div>

      <div className="client__view">
        <a href="/" className="btn btn--sm btn--link">
          View Client
        </a>
      </div>

      <div className="client__more">
        <FontAwesomeIcon icon="ellipsis-v" />{" "}
      </div>
    </div>
  );
};

export default ClientRow;
