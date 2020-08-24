import React from "react";
import Toggle from "../../toggle/Toggle";

const Address = ({ address, setPrimaryAddress, deleteAddress }) => {
  return (
    <React.Fragment>
      {address && (
        <div className="address">
          <div className="address__info">
            <div className="address__details">
              <p data-testid="address-address1"> {address.address1}</p>
              <div className="address__address2">
                <span data-testid="address-address2">{address.address2}</span>
              </div>
              <p>
                <span
                  style={{ letterSpacing: "1px" }}
                  data-testid="address-city"
                >
                  {address.city}
                </span>
                , <span data-testid="address-state">{address.state}</span>
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
      )}
    </React.Fragment>
  );
};

export default Address;
