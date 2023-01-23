import { FC } from "react";

import { RepoListItem } from "./components";

import { RepoListItemType } from "../RepoPanel/types";

type RepoListProps = {
  data: RepoListItemType[];
};

export const RepoList: FC<RepoListProps> = ({ data }) => {
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
