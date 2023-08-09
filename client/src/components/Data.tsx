import React from "react";
import { useGetAllProductsQuery } from "../features/apiSlice";

export const Data = () => {
  const { data, error, isLoading } = useGetAllProductsQuery(undefined);
  console.log(data, error, isLoading);
  return <div>data</div>;
};
