import { useMemo } from "react";

import { useFetch } from "../../../../utils";
import { useQueryParams } from "./useQueryParams";
import { formatDataFromResponse } from "../helpers";

import { ListReposType } from "../types";

export const useFetchRepositoryList = (baseUrl: string) => {
  const { queryState, setQueryState,url:queryUrl } = useQueryParams(baseUrl);
  const { data, loading, error } = useFetch<ListReposType>(queryUrl);

  const repoListData = useMemo(() => {
    return formatDataFromResponse(data);
  }, [data]);

  return { repoListData, loading, error, queryState, setQueryState };
};
