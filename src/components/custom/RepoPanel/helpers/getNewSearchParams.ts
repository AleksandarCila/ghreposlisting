import { RepoPanelQueryState } from './../types';

export const getNewSearchParams = (queryState:RepoPanelQueryState) => {
    const newParams = new URLSearchParams();
    newParams.set('page',queryState.page.toString());
    newParams.set('sort',queryState.sort);
    return newParams;
}