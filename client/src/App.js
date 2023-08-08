import React, { useEffect } from "react";
import "./App.css";
import { useGetAllProductsQuery } from "./features/slices/apiSlice";

export const App = () => {
  useEffect(() => {
    const { data } = useGetAllProductsQuery();
    console.log(data);
  }, []);
  return <div>App</div>;
};
