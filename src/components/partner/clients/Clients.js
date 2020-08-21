import React, { useEffect, useState } from "react";
import Input from "../../input/Input.js";
import api from "../../../api";
import "./clients.scss";
import ClientCard from "./ClientCard.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "../../loader/Loader";
import axios from "axios";

const Clients = ({ location }) => {
  const [loading, setLoading] = useState(true);
  const [clients, setClients] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(9);
  const [q, setQ] = useState("");
  const [hasNextPage, setHasNextPage] = useState(true);

  // useEffect(() => {
  //   api.get("/customers").then((res) => {
  //     setClients(res);
  //   });
  // }, []);
  // const CancelToken = axios.CancelToken;
  // const source = CancelToken.source();
  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    async function fetchData() {
      setLoading(true);

      try {
        const res = await api.get(
          "/customers",
          {
            _page: page,
            _limit: perPage,
            q: q,
          },
          { cancelToken: source.token }
        );

        setClients((prevClients) => prevClients.concat(res.data));
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    }
    fetchData();
    return () => {
      source.cancel("Operation canceled by the user.");
    };
  }, [page, perPage, q]);

  useEffect(() => {
    setClients([]);
  }, [q]);

  const handleSearchChange = (e) => {
    setPage(1);
    // source.cancel("Operation canceled by the user.");
    setQ(e.target.value);
  };

  async function handleLoadMore() {
    setPage((p) => p + 1);
  }

  return (
    <React.Fragment>
      <section className="search-filter flex">
        <div style={{ flexBasis: "25%" }}>
          <Input
            icon={<FontAwesomeIcon icon="search" />}
            onChange={handleSearchChange}
          ></Input>
        </div>
        <div className="flex">
          <select>
            <option>Name asc</option>
            <option>Name desc</option>
          </select>
        </div>
      </section>
      <div className="grid clients">
        {loading && <Loader />}
        {clients.map((client) => (
          <ClientCard client={client} key={client.id.toString()}></ClientCard>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Clients;
