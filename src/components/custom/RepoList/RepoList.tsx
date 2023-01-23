import { FC, useMemo } from "react";

import { formatDataFromResponse } from "./helpers";

import { useFetch } from "../../../utils";

import { ListReposType } from "./types";

type RepoListProps = {
  apiUrl: string;
};

export const RepoList: FC<RepoListProps> = ({ apiUrl }) => {
  const { data, loading, error } = useFetch<ListReposType>(apiUrl);

  const repoListData = useMemo(() => {
    return formatDataFromResponse(data);
  }, [data]);

  console.log(repoListData, loading, error);
  return <div>RepoList</div>;
};
