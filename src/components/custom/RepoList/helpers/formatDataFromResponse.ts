import { RepoListItemType, ListReposType } from "../types";

export const formatDataFromResponse = (data: ListReposType | undefined) => {
  if (data === undefined) return undefined;
  const formatedData: RepoListItemType[] = data.items.map((originalRepoListItem) => {
    return {
      name: originalRepoListItem.name,
      stars: originalRepoListItem.stargazers_count,
      forks: originalRepoListItem.forks,
      ownerName: originalRepoListItem.owner?.login || "No Name",
      ownerAvatar: originalRepoListItem.owner?.avatar_url || "No Avatar",
    };
  });

  return formatedData;
};
