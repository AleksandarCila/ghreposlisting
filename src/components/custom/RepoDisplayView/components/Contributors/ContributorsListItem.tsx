import { FC } from "react";

import { AiFillGithub } from "react-icons/ai";

import { RepoDataDisplayType } from "../../types";

type ContributorsListItemProps = {
  contributor: RepoDataDisplayType["contributors"][0];
};

export const ContributorsListItem: FC<ContributorsListItemProps> = ({
  contributor,
}) => {
  return (
    <div className="contributor-item">
      <div className="details">
        <img src={contributor.avatar_url} alt={`${contributor.login}-avatar`} />

        {contributor.login}
      </div>
      <a href={contributor.html_url}>
        <AiFillGithub />
      </a>
    </div>
  );
};
