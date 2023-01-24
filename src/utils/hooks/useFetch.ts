import { useEffect, useState } from "react";

export const useFetch = <T>(url: string | undefined, options?:{}) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      setLoading(true);
      try {
        if (!url) throw Error(`Error: ${url} is not correct`);
        
        const response = await fetch(url,options);
        if (!response.ok) throw Error(`Error:${response.status}`);

        const data = (await response.json()) as T;
        setData(data);
      } catch (error) {
        // @ts-ignore
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [url,options]);

  return { data, error, loading };
};
