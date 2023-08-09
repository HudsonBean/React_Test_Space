import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { users, user } from "../features/apiTypes";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    //Users
    getAllUsers: builder.query<users, undefined>({
      query: () => "users",
    }),
    getUser: builder.query<user, number>({
      query: (userId: number) => `users/${userId}`,
    }),
  }),
});

export const { useGetAllUsersQuery, useGetUserQuery } = apiSlice;
