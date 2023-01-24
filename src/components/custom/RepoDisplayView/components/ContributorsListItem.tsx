import { FC } from "react";
import { RepoDataDisplayType } from "../types";

type ContributorsListItemProps = {
  contributor: RepoDataDisplayType["contributors"][0];
};

export const ContributorsListItem: FC<ContributorsListItemProps> = ({
  contributor,
}) => {
  return (
    <div className="contributor-item">
      <img src={contributor.avatar_url} alt={`${contributor.login}-avatar`} />
      {contributor.login}
      <a href={contributor.html_url}>GitHub</a>
    </div>
  );
};
