import { FC } from "react";

import { Links } from "../Links";

import "./RepoMainDetails.styles.css";

type RepoMainDetailsProps = {
  repoName: string;
  ownerName: string;
  ownerAvatar: string;
  stars: number;
  forks: number;
  gitHubUrl: string;
  webUrl: string;
};

export const RepoMainDetails: FC<RepoMainDetailsProps> = ({
  repoName,
  ownerName,
  ownerAvatar,
  stars,
  forks,
  gitHubUrl,
  webUrl,
}) => {
  return (
    <div className="repoMainDetails">
      <img src={ownerAvatar} alt={`${ownerName}-avatar`} className="avatar" />
      <div className="repoNameContainer">
        <div className="repoName">
          <span>Repository Name: </span>
          {repoName}
        </div>
        <hr />
        <div className="ownerName">
          <span>Owner: </span>
          {ownerName}
        </div>
        <div>
          <span> 🍴 </span>
          {forks.toLocaleString("en-US")} - <span> ⭐ </span>
          {stars.toLocaleString("en-US")}
        </div>
      </div>
      <Links gitHubUrl={gitHubUrl} webUrl={webUrl} />
    </div>
  );
};
