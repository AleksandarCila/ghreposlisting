import { RepoPanelQueryState } from "./../types";


const getSort=(search:URLSearchParams)=>{
  const searchSort = search.get('sort') || 'stars';
  if(searchSort === 'stars' || searchSort==='forks') return searchSort;
  return 'stars';
}

export const getInitialQueryParams = (search:URLSearchParams): RepoPanelQueryState => {
  return {
    page: parseInt(search.get('page') || '1'),
    per_page: 10,
    total: 0,
    sort: getSort(search),
  };
};
