import { Endpoints } from "@octokit/types";

export type RepoDataType =
  Endpoints["GET /repos/{owner}/{repo}"]['response']['data'];
