import { useMemo, useEffect } from "react";

import { useFetch } from "../../../../utils";
import { useStateFromURL } from "./useStateFromURL";
import { formatDataFromResponse } from "../helpers";

import { ListReposType } from "../types";

export const useFetchRepositoryList = (baseUrl: string) => {
  const { queryState, setQueryState, url: queryUrl } = useStateFromURL(baseUrl);
  
  const { data, loading, error } = useFetch<ListReposType>(queryUrl);

  const repoListData = useMemo(() => {
    return formatDataFromResponse(data);
  }, [data]);

  useEffect(() => {
    setQueryState((prev) => ({ ...prev, total: data?.total_count || 0 }));
  }, [data, setQueryState]);

  return { repoListData, loading, error, queryState, setQueryState };
};
