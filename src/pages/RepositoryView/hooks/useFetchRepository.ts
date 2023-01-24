import { useFetch } from './../../../utils/';
import { useParams } from 'react-router-dom'

import { RepoDataType } from '../types';

export const useFetchRepository = () => {
  const {userName, repoName} = useParams();

  const url = `https://api.github.com/repos/${userName}/${repoName}`

  const {data,loading,error} = useFetch<RepoDataType>(url);

  return {data,loading,error};
};
