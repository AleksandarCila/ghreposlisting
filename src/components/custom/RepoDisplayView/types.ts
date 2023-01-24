import { Endpoints } from "@octokit/types";

export type RepoEndpointType =
  Endpoints["GET /repos/{owner}/{repo}"]["response"]["data"];

export type ContributorsEndpointType =
  Endpoints["GET /repos/{owner}/{repo}/contributors"]["response"]["data"];

export type LanguagesEndpointType =
  Endpoints["GET /repos/{owner}/{repo}/languages"]["response"]["data"];

export type RepoDataDisplayType = {
  repoName: string;
  ownerName: string;
  ownerAvatar: string;
  stars: number;
  forks: number;
  openIssues: number;
  gitHubUrl:string,
  webUrl:string,
  languages: {
    name: string;
    percentage: string;
  }[];
  contributors: ContributorsEndpointType;
};
