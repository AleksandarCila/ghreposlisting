import { FC } from "react";

import { RepoListItem } from "./components";
import { Spinner } from "../../generic";

import { RepoListItemType } from "../RepoPanel/types";

type RepoListProps = {
  data: RepoListItemType[] | undefined;
  error: string;
  loading: boolean;
};

export const RepoList: FC<RepoListProps> = ({ data, error, loading }) => {
  if (loading) return <Spinner />;

  if (error) return <div>{error.toString()}</div>;

  return (
    <>
      {data &&
        data.map((repoListItem) => {
          return (
            <RepoListItem
              key={`${repoListItem.name}-${repoListItem.ownerName}`}
              item={repoListItem}
            />
          );
        })}
    </>
  );
};
