import React from "react";
import { Layout, Spinner } from "../../components";
import { useFetchRepository } from "./hooks";

export const RepositoryView = () => {
  const { data, error, loading } = useFetchRepository();

  if (loading) return <Spinner />;

  if (error) return <div>{error}</div>;

  console.log(data);
  return <Layout>RepositoryView</Layout>;
};
