import { FC } from "react";

import { RepoList } from "../RepoList";
import { SortForm } from "../SortForm";

import { useFetchRepositoryList } from "./hooks";
import { Pagination } from "../../generic";

import { RepoPanelProps, RepoPanelQueryState } from "./types";

export const RepoPanel: FC<RepoPanelProps> = ({ apiUrl }) => {
  const { repoListData, loading, error, queryState, setQueryState } =
    useFetchRepositoryList(apiUrl);

  const handlePageChange = (pageIncrease: number) => {
    setQueryState((prev) => ({ ...prev, page: prev.page + pageIncrease }));
  };

  const handleSortChange = (newSort: RepoPanelQueryState["sort"]) => {
    setQueryState((prev) => ({ ...prev, sort: newSort }));
  };

  
  return (
    <div>
      <SortForm sort={queryState.sort} onChange={handleSortChange} />
      <RepoList data={repoListData} error={error} loading={loading} />

      <Pagination
        currPage={queryState.page}
        totalItems={queryState.total}
        limitPerPage={queryState.per_page}
        onClick={handlePageChange}
      />
    </div>
  );
};
