import React from "react";
import { Languages, RepoMainDetails } from "./components";
import { Spinner } from "../../generic";

import { useFetchRepository } from "./hooks";

import "./RepoDisplayView.styles.css";

export const RepoDisplayView = () => {
  const { repoData: data, error, loading } = useFetchRepository();

  if (loading) return <Spinner />;

  if (error || !data) return <div>{error}</div>;

  console.log(data);
  return (
    <div className="repoDisplayContainer">
      <RepoMainDetails
        repoName={data.repoName}
        ownerName={data.ownerName}
        ownerAvatar={data.ownerAvatar}
        stars={data.stars}
        forks={data.forks}
      />
      <hr />
      <div>Open Issues: {data.openIssues}</div>
      <hr/>
      <Languages languages={data.languages}/>
    </div>
  );
};
