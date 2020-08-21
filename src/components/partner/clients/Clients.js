import React, { useEffect, useState, useDebugValue } from "react";
import Input from "../../input/Input.js";
import api from "../../../api";
import "./clients.scss";
import ClientCard from "./ClientCard.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "../../loader/Loader";
import axios from "axios";
import useInfiniteScroll from "react-infinite-scroll-hook";

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

        setClients((prevClients) => {
          setHasNextPage(hasNextKey(res.headers.link));
          return prevClients.concat(res.data);
        });

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

  function hasNextKey(link) {
    return link.split(",").some((a) => a.indexOf("next") !== -1);
  }

  const handleSearchChange = (e) => {
    setPage(1);
    setQ(e.target.value);
  };

  function handleLoadMore() {
    setPage((p) => p + 1);
  }

  const infiniteRef = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: handleLoadMore,
    scrollContainer: "window",
    // threshold: 10,
  });

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
      <div ref={infiniteRef} className="grid clients">
        {loading && <Loader />}
        {clients.map((client) => (
          <ClientCard client={client} key={client.id.toString()}></ClientCard>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Clients;
