import { useMemo } from "react";

import { useFetch } from "./../../../../utils/hooks/useFetch";
import { formatEndpointData } from "../helpers";

import { RepoEndpointType, LanguagesEndpointType } from "./../types";

export const useGetRepoDisplayData = (data: RepoEndpointType | undefined) => {
  const {
    data: languages,
    error,
    loading,
  } = useFetch<LanguagesEndpointType>(data?.languages_url);
  
  

  const repoData = useMemo(() => {
    return formatEndpointData(data, languages);
  }, [data, languages]);

  return { repoData, error, loading };
};
