import { useFetch } from '../../../../utils';
import { useParams } from 'react-router-dom'

import { useGetRepoDisplayData } from './useGetRepoDisplayData';

import { RepoEndpointType } from '../types';

export const useFetchRepository = () => {
  const {userName, repoName} = useParams();

  const url = `https://api.github.com/repos/${userName}/${repoName}`

  const {data,loading,error} = useFetch<RepoEndpointType>(url);

  const {repoData} = useGetRepoDisplayData(data);

  return {repoData,loading,error};
};
