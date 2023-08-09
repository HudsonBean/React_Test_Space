import React, { useEffect } from "react";
import { useGetAllProductsQuery } from "../features/apiSlice";

export const Data = () => {
  const { data } = useGetAllProductsQuery(undefined);
  console.log(typeof data);
  return <div>Data</div>;
};
