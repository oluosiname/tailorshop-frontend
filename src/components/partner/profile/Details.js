import React, { useState, useEffect } from "react";
import Input from "../../input/Input";
import FormErrors from "../../FormErrors";
import api from "../../../api";
import Address from "../Addresses/Address";

const Details = () => {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await api.get(`/addresses`);

        setAddresses(res.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  const setPrimaryAddress = async (uuid) => {
    try {
      await api.patch(`/addresses/${uuid}`, {
        address: {
          primary: true,
        },
      });
      setAddresses((prev) => {
        return prev.map((a) => {
          a.attributes.primary = a.attributes.uuid === uuid;
          return a;
        });
      });
    } catch (e) {
      console.log(e);
    }
  };

  const deleteAddress = async (uuid) => {
    try {
      await api.delete(`/addresses/${uuid}`);
      setAddresses((prev) => {
        return prev.filter((a) => {
          return a.attributes.uuid !== uuid;
        });
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className="profile__body">
      <section className="card">
        <div className="card__header">
          <div className="card__header__title">Change Password</div>
        </div>
        <div className="card__body">
          {/* {formErrors.length > 0 && <FormErrors errors={formErrors} />} */}
          <div className="m-bottom-5">
            <Input label="Current Password" type="password" />
          </div>

          <div className="m-bottom-5">
            <Input label="New Password" type="password" />
          </div>
          <div className="m-bottom-5">
            <Input label="Confirm New Password" type="password" />
          </div>

          <button
            type="submit"
            className="btn btn--primary"
            // onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </section>

      <section className="card ">
        <div className="card__header">
          <div className="card__header__title">Addresses</div>
        </div>
        <div
          className=" p-left-4 m-top-4"

          // onClick={() => setShowClientModal(true)}
        >
          <button className="btn btn--sm btn--link "> New</button>
          {/* <FontAwesomeIcon icon="plus" /> */}
        </div>

        <div className="card__body addresses">
          {addresses.map((address) => (
            <Address
              key={address.id}
              address={address.attributes}
              setPrimaryAddress={setPrimaryAddress}
              deleteAddress={deleteAddress}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Details;
