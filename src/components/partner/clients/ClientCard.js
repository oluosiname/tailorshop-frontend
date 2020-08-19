import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ClientCard = ({ client }) => {
  return (
    <div className="client">
      <div className="client__info">
        <div className="client__icon">
          <img
            src="http://odindesign-themes.com/vikinger/img/quest/openq-b.png"
            alt="openq-b"
          />
        </div>

        <p className="client__name">
          {" "}
          {client.first_name} {client.last_name}
        </p>

        <div className="client__details">
          <div className="client__address">
            <FontAwesomeIcon icon="map-marker-alt" />
            <span>{client.address}</span>
          </div>
          <p>
            <FontAwesomeIcon icon="phone-alt" />
            <span style={{ letterSpacing: "1px" }}>{client.phone_number}</span>
          </p>
        </div>

        <div className="client__jobs">
          <p>5/7 jobs completed</p>
        </div>

        <div className="client__meta">
          <div className="text-center">
            <a href="/" className="btn btn--sm btn--link">
              View Client
            </a>
          </div>
          <div className="flex">
            <div className="edit">
              <FontAwesomeIcon icon="edit" />
            </div>
            <div className="delete">
              <FontAwesomeIcon icon="trash" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;