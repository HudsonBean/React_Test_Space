import React from "react";
import { useGetAllProductsQuery } from "../features/apiSlice";

export const Data = () => {
  const { data, error, isLoading } = useGetAllProductsQuery(undefined);
  console.log(data, error, isLoading);
  return (
    <div>
      {data?.products.map((i) => (
        <p key={i.id}>{i.title}</p>
      ))}
    </div>
  );
};
