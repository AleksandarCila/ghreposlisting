import { FC } from "react";

import "./RepoListItem.styles.css";

import { RepoListItemType } from "../../../RepoPanel/types";

type RepoListItemProps = {
  item: RepoListItemType;
};

export const RepoListItem: FC<RepoListItemProps> = ({ item }) => {
  return (
    <div className="repoListItem">
      <img
        className="avatar"
        src={item.ownerAvatar}
        alt={`${item.ownerName}-avatar`}
      />
      <div className="itemDetailsContainer">
        <div className="text">
          <span>Repository name: </span>
          {item.name}
        </div>
        <hr />
        <div>
          <div className="text">
            <span>Owner: </span>
            {item.ownerName}
          </div>
        </div>
        <div className="text">
          <span> 🍴 </span>
          {item.forks.toLocaleString("en-US")} - <span> ⭐ </span>
          {item.stars.toLocaleString("en-US")}
        </div>
      </div>
    </div>
  );
};
