import { useCallback } from "react";

import { useSearchParams } from "react-router-dom";

export const useSetSearchParamsByTab = (
  setActiveTab: React.Dispatch<React.SetStateAction<string>>
) => {
  const [search, setSearch] = useSearchParams();

  const handleTabChange = useCallback(
    (newTab: string) => {
      const newParams = new URLSearchParams(search);
      newParams.set("page", "1");
      setSearch(newParams);
      setActiveTab(newTab);
    },
    [setSearch, search, setActiveTab]
  );

  return { handleTabChange };
};
