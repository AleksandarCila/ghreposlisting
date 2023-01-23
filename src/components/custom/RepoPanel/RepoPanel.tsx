import { FC } from "react";

import { RepoList } from "../RepoList";

import { useFetchRepositoryList } from "./hooks";
import { Pagination } from "../../generic";

import { RepoPanelProps } from "./types";

export const RepoPanel: FC<RepoPanelProps> = ({ apiUrl }) => {
  const { repoListData, loading, error, queryState, setQueryState } =
    useFetchRepositoryList(apiUrl);

  const handlePageChange = (pageIncrease: number) => {
    setQueryState((prev) => ({ ...prev, page: prev.page + pageIncrease }));
  };

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error.toString()}</div>;
  return (
    <div>
      {repoListData && <RepoList data={repoListData} />}

      <Pagination
        currPage={queryState.page}
        totalItems={queryState.total}
        limitPerPage={queryState.per_page}
        onClick={handlePageChange}
      />
    </div>
  );
};
