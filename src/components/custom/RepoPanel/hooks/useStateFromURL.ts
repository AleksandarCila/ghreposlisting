import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import {
  getInitialQueryParams,
  getUrlFromQueryState,
  getNewSearchParams,
} from "../helpers";

import { RepoPanelQueryState } from "../types";

export const useStateFromURL = (apiUrl: string) => {
  const [search, setSearch] = useSearchParams();

  const [queryState, setQueryState] = useState<RepoPanelQueryState>(
    getInitialQueryParams(search)
  );

  const [url, setUrl] = useState(getUrlFromQueryState(queryState, apiUrl));

  useEffect(() => {
    setSearch(getNewSearchParams(queryState));
    setUrl(getUrlFromQueryState(queryState, apiUrl));
  }, [queryState, apiUrl, setSearch]);

  return { queryState, setQueryState, url };
};
