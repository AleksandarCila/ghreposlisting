import { useEffect } from "react";
import { useState } from "react";

import { getInitialQueryParams, getUrlFromQueryState } from "../helpers";

import { RepoPanelQueryState } from "../types";

export const useQueryParams = (apiUrl: string) => {
  const [queryState, setQueryState] = useState<RepoPanelQueryState>(
    getInitialQueryParams()
  );
  const [url, setUrl] = useState(getUrlFromQueryState(queryState, apiUrl));

  useEffect(() => {
    setUrl(getUrlFromQueryState(queryState, apiUrl));
  }, [queryState,apiUrl]);

  return { queryState, setQueryState, url };
};
