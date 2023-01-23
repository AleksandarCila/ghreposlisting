import { RepoPanelQueryState } from "./../types";
export const getUrlFromQueryState = (
  queryState: RepoPanelQueryState,
  url: string
) => {
  return `${url}&page=${queryState.page}&per_page=${queryState.per_page}&sort=${queryState.sort}`;
};
