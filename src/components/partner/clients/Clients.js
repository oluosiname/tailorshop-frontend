import React, { useEffect, useState } from "react";

import Input from "../../input/Input.js";
import api from "../../../api";
import "./clients.scss";
import ClientCard from "./ClientCard.js";

const Clients = ({ location }) => {
  const [hasNextPage, setHasNextPage] = useState();
  const [isLoading, setIsLoading] = useState();
  const [clients, setClients] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [offset, setOffset] = useState(0);
  const [q, setQ] = useState("");
  // useEffect(() => {
  //   api.get("/customers").then((res) => {
  //     setClients(res);
  //   });
  // }, []);

  useEffect(() => {
    async function fetchData() {
      const res = await api.get("/customers", {
        _page: page,
        _limit: perPage,
        q: q,
      });
      setClients(res);
    }
    fetchData();
  }, [page, perPage, q]);

  const handlePageClick = ({ selected, ...rest }) => {
    const offset = Math.ceil(selected * perPage);
    setPage(selected + 1);
    setOffset(offset);
  };

  const handleSearchChange = (e) => {
    setQ(e.target.value);
  };

  const handleLoadMore = (e) => {
    setIsLoading(true);
  };

  return (
    <div className="grid clients">
      {clients.map((client) => (
        <ClientCard client={client} key={client.id.toString()}></ClientCard>
      ))}
    </div>
  );
};

export default Clients;
