import { FC } from "react";

import { RepoListItem } from "./components";

import { RepoListItemType } from "../RepoPanel/types";

type RepoListProps = {
  data: RepoListItemType[] | undefined;
  error: string;
  loading: boolean;
};

export const RepoList: FC<RepoListProps> = ({ data, error, loading }) => {
  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error.toString()}</div>;

  return (
    <div>
      {data && (
        <>
          {data.map((repoListItem) => {
            return (
              <RepoListItem
                key={`${repoListItem.name}-${repoListItem.ownerName}`}
                item={repoListItem}
              />
            );
          })}
        </>
      )}
    </div>
  );
};
