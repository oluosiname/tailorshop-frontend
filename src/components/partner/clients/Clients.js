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
  const [listStye, setListStyle] = useState("grid");
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
          "/partners/customers",
          {
            page: page,
            q: q,
          },
          { cancelToken: source.token }
        );

        setClients((prevClients) => {
          setHasNextPage(res.meta.has_next_page);
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
  }, [page, q]);

  useEffect(() => {
    setClients([]);
    setHasNextPage(false);
  }, [q]);

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
        <div className="search-filter__input">
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
        {clients.map((client) => (
          <ClientCard client={client.attributes} key={client.id}></ClientCard>
        ))}
        {loading && <Loader />}
      </div>
    </React.Fragment>
  );
};

export default Clients;
