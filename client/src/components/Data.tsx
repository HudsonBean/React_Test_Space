import React from "react";
import { useGetAllProductsQuery } from "../features/apiSlice";

export const Data = () => {
  const { data, error, isLoading } = useGetAllProductsQuery(undefined);
  console.log(data, error, isLoading);
  return (
    <div>
      {data?.products.map((product) => (
        <>
          <li key={product.id}>{product.title}</li>
          <img src={product.images[0]}></img>
        </>
      ))}
    </div>
  );
};
