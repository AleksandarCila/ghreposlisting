import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  fetchLanguages,
  fetchContributors,
  fetchRepository,
  formatEndpointData,
} from "../helpers";

import { RepoDataDisplayType } from "../types";

export const useGetRepositoryData = () => {
  const { userName, repoName } = useParams();

  const [data, setData] = useState<RepoDataDisplayType>();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const url = `https://api.github.com/repos/${userName}/${repoName}`;

  useEffect(() => {
    (async () => {
      setLoading(true);

      try {
        const languages = await fetchLanguages(url);
        const contributors = await fetchContributors(url);
        const repoData = await fetchRepository(url);
        
        const data = formatEndpointData(repoData, languages, contributors);

        setData(data);
      } catch (err) {
        //@ts-ignore
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, loading, error };
};
