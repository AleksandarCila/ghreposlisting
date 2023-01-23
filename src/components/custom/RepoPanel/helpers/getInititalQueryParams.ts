import { RepoPanelQueryState } from "./../types";

export const getInitialQueryParams = (): RepoPanelQueryState => {
  return {
    page: 1,
    per_page: 10,
    total: 0,
    sort: "stars",
  };
};
