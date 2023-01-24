import React from "react";
import { LanguagesList, RepoMainDetails,Contributors } from "./components";
import { Spinner } from "../../generic";

import { useGetRepositoryData } from "./hooks";

import "./RepoDisplayView.styles.css";

export const RepoDisplayView = () => {
  const { data, error, loading } = useGetRepositoryData();

  if (loading) return <Spinner />;

  if (error || !data) return <div>{error}</div>;

  return (
    <div className="repoDisplayContainer">
      <RepoMainDetails
        repoName={data.repoName}
        ownerName={data.ownerName}
        ownerAvatar={data.ownerAvatar}
        stars={data.stars}
        forks={data.forks}
        gitHubUrl={data.gitHubUrl}
        webUrl={data.webUrl}
      />
      <hr />
      <div>Open Issues: {data.openIssues}</div>
      <hr/>
      <LanguagesList languages={data.languages}/>
      <hr/>
      <Contributors contributors={data.contributors}/>
    </div>
  );
};
