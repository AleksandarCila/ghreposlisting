import { FC, useMemo } from "react";

import { formatDataFromResponse } from "./helpers";

import { useFetch } from "../../../utils";

import { ListReposType } from "./types";
import { RepoListItem } from "./components";

import { Pagination } from "../../generic";

type RepoListProps = {
  apiUrl: string;
};

export const RepoList: FC<RepoListProps> = ({ apiUrl }) => {
  const { data, loading, error } = useFetch<ListReposType>(apiUrl);

  const repoListData = useMemo(() => {
    return formatDataFromResponse(data);
  }, [data]);

  console.log(data, loading, error);
  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div>
      {data && repoListData && (
        <>
          {repoListData.map((repoListItem) => {
            return (
              <RepoListItem
                key={`${repoListItem.name}-${repoListItem.ownerName}`}
                item={repoListItem}
              />
            );
          })}
          <Pagination totalItems={data?.total_count} limitPerPage={30}/>
        </>
      )}
    </div>
  );
};
