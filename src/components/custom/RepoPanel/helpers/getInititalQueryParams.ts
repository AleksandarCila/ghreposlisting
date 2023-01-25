import { RepoPanelQueryState } from "./../types";

const getSort = (search: URLSearchParams) => {
  const searchSort = search.get("sort") || "stars";
  if (searchSort === "stars" || searchSort === "forks") return searchSort;
  return "stars";
};

const getPage = (search: URLSearchParams) => {
  const page = parseInt(search.get("page") || "1");
  if (page <= 0) return 1;
  return page;
};

export const getInitialQueryParams = (
  search: URLSearchParams
): RepoPanelQueryState => {
  return {
    page: getPage(search),
    per_page: 10,
    total: 0,
    sort: getSort(search),
  };
};
