import React from "react";
import Toggle from "../../toggle/Toggle";

const Address = ({ address, setPrimaryAddress, deleteAddress }) => {
  return (
    <div className="address">
      <div className="address__info">
        <div className="address__details">
          <p> {address.address1}</p>
          <div className="address__address2">
            <span>{address.address2}</span>
          </div>
          <p>
            <span style={{ letterSpacing: "1px" }}>{address.city}</span>,{" "}
            <span>{address.state}</span>
          </p>
        </div>
        <div className="default">
          <span>Default</span>
          <div style={{ float: "right" }}>
            {" "}
            <Toggle
              checked={address.primary}
              onChange={() => setPrimaryAddress(address.uuid)}
            />
          </div>
        </div>
      </div>
      <div className="address__meta">
        <div className="edit">Edit</div>
        <div className="delete" onClick={() => deleteAddress(address.uuid)}>
          Delete
        </div>
      </div>
    </div>
  );
};

export default Address;
