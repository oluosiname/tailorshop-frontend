import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../api";
import Address from "./Address";
import "./address.scss";

const Addresses = () => {
  const [addresses, setAddresses] = useState([]);
  let { client_id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await api.get(`/partners/customers/${client_id}/addresses`);

        setAddresses(res.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, [client_id]);

  const setPrimaryAddress = async (uuid) => {
    setAddresses((prev) => {
      return prev.map((a) => {
        a.attributes.primary = a.attributes.uuid === uuid;
        return a;
      });
    });
    // try {
    //   const res = await api.patch(`/partners/customers/${client_id}/addresses/$uuid/set_as_primary`);
    //   setAddresses(prev => {
    //     return prev.map(a => {
    //       if(a.uuid === uuid){
    //         a.primary = true
    //       }else{
    //         a,primary = false
    //       }
    //       return a
    //     })
    //   })

    // } catch (e) {
    //   console.log(e);
    // }
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
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Addresses;
