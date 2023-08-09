import React from "react";
import { useGetAllProductsQuery } from "../features/apiSlice";

export const Data = () => {
  const { data, error, isLoading } = useGetAllProductsQuery(undefined);
  console.log(data, error, isLoading);
  return (
    <div>
      {data?.products.map((product) => (
        <>
          <p key={product.id}>{product.title}</p>
          {product.images.map((image) => (
            <img key={product.id} src={image}></img>
          ))}
        </>
      ))}
    </div>
  );
};
