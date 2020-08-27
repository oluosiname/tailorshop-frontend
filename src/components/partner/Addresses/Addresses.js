import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../api";
import Address from "./Address";

const Addresses = () => {
  const [addresses, setAddresses] = useState([]);
  let { client_id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await api.get(`/addresses`, { customer_id: client_id });

        setAddresses(res.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, [client_id]);

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
    <React.Fragment>
      <section className="search-filter flex">
        <div className="search-filter__input"></div>
      </section>
      <div className="grid addresses">
        {addresses.map((address) => (
          <Address
            key={address.id}
            address={address.attributes}
            setPrimaryAddress={setPrimaryAddress}
            deleteAddress={deleteAddress}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Addresses;
