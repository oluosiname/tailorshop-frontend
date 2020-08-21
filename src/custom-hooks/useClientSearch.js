import React, { useEffect, useState } from "react";
import api from "../api";

const useClientSearch = (query, page, perPage) => {
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    setClients([]);
  }, [query]);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      // if (!hasMore) {
      //   return;
      // }
      const res = await api.get("/customers", {
        _page: page,
        _limit: perPage,
        q: query,
      });

      setClients((prevClients) => {
        setHasMore(
          prevClients.concat(res.data).length < res.headers["x-total-count"]
        );
        setIsLoading(false);
        return prevClients.concat(res.data);
      });

      console.log(res.data);
    }
    fetchData();
  }, [page, perPage, query]);

  return { isLoading, clients, hasMore };
};

export default useClientSearch;
