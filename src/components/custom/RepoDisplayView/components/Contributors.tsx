import { FC } from "react";

import { ContributorsListItem } from "./ContributorsListItem";

import { RepoDataDisplayType } from "../types";

type ContributorsProps = {
  contributors: RepoDataDisplayType["contributors"];
};

export const Contributors: FC<ContributorsProps> = ({ contributors }) => {
  return (
    <div>
      {contributors.map((contributor) => (
        <ContributorsListItem key={contributor.id} contributor={contributor} />
      ))}
    </div>
  );
};
