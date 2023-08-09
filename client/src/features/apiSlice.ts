import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface product {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: Array<string>;
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}
interface products {
  limit: number;
  products: Array<product>;
  skip: number;
  total: number;
}

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<products, undefined>({
      query: () => "products",
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
