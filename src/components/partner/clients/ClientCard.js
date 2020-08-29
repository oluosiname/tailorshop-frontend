import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { capitalize } from "../../../utilities/utilities";

const ClientCard = ({ client }) => {
  return (
    <React.Fragment>
      {client && (
        <div className="client">
          <div className="client__info">
            <div className="client__icon">
              <img
                src="http://odindesign-themes.com/vikinger/img/quest/openq-b.png"
                alt="openq-b"
              />
            </div>

            <p className="client__name" data-testid="client-name">
              {" "}
              {capitalize(client.first_name)} {capitalize(client.last_name)}
            </p>

            <div className="client__details">
              <div className="client__address">
                <FontAwesomeIcon icon="map-marker-alt" />
                <span data-testid="client-address">{client.address}</span>
              </div>
              <p>
                <FontAwesomeIcon icon="phone-alt" />
                <span
                  style={{ letterSpacing: "1px" }}
                  data-testid="client-phone-number"
                >
                  {client.phone_number}
                </span>
              </p>
            </div>

            <div className="client__jobs">
              <p>5/7 jobs completed</p>
            </div>

            <div className="client__meta">
              <div className="text-center">
                <Link
                  className="btn btn--sm btn--link"
                  to={`/partner/clients/${client.uuid}`}
                >
                  View Client
                </Link>
              </div>
              <div className="flex">
                <div className="edit">
                  <FontAwesomeIcon icon="edit" /> Edit
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default ClientCard;
