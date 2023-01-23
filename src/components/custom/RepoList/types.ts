import { Endpoints } from "@octokit/types";

export type ListReposType =
  Endpoints["GET /search/repositories"]['response']['data'];


export type RepoListItemType = {
    name:string,
    stars:number,
    forks:number,
    ownerName:string,
    ownerAvatar:string,
}