import { getPercantageOfUsedLanguages } from "./getPercentageOfUsedLanguage";

import {
  RepoEndpointType,
  RepoDataDisplayType,
  LanguagesEndpointType,
} from "./../types";

export const formatEndpointData = (
  data: RepoEndpointType | undefined,
  languages: LanguagesEndpointType | undefined
): RepoDataDisplayType | undefined => {
  if (!data) return undefined;
  const languagesPercentage = getPercantageOfUsedLanguages(languages);

  return {
    repoName: data.name,
    ownerName: data.owner.login || "No Name",
    ownerAvatar: data.owner.avatar_url,
    stars: data.stargazers_count,
    forks: data.forks_count,
    openIssues: data.open_issues_count,
    languages: languagesPercentage,
    contributors: [],
  };
};
