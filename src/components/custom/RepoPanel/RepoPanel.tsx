import { FC, useMemo } from "react";

import { RepoList } from "../RepoList";

import { useFetch } from "../../../utils";

import { formatDataFromResponse } from "./helpers";

import { ListReposType, RepoPanelProps } from "./types";

export const RepoPanel: FC<RepoPanelProps> = ({ apiUrl }) => {
  const { data, loading, error } = useFetch<ListReposType>(apiUrl);

  const repoListData = useMemo(() => {
    return formatDataFromResponse(data);
  }, [data]);

  console.log(data, loading, error);
  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error.toString()}</div>;
  return <div>{repoListData && <RepoList data={repoListData} />}</div>;
};
