import React from "react";
import { useGetAllProductsQuery } from "../features/apiSlice";

export const Data = () => {
  const { data, error, isLoading } = useGetAllProductsQuery(undefined);
  console.log(data, error, isLoading);
  return (
    <div>
      {data?.products.map((product) => (
        <ul key={product.id}>
          <li>{product.title}</li>
          <img src={product.images[0]}></img>
        </ul>
      ))}
    </div>
  );
};
