import { FC, useMemo } from "react";

import { formatDataFromResponse } from "./helpers";

import { useFetch } from "../../../utils";

import { ListReposType } from "./types";
import { RepoListItem } from "./components";

type RepoListProps = {
  apiUrl: string;
};

export const RepoList: FC<RepoListProps> = ({ apiUrl }) => {
  const { data, loading, error } = useFetch<ListReposType>(apiUrl);

  const repoListData = useMemo(() => {
    return formatDataFromResponse(data);
  }, [data]);

  console.log(repoListData, loading, error);
  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div>
      {repoListData &&
        repoListData.map((repoListItem) => {
          return (
            <RepoListItem
              key={`${repoListItem.name}-${repoListItem.ownerName}`}
              item={repoListItem}
            />
          );
        })}
    </div>
  );
};
