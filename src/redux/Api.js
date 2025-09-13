import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/",
  }),
  endpoints: (builder) => ({
    getHeroes: builder.query({
      query: () => "superheroes",
    }),
  }),
});

export const { useGetHeroesQuery } = Api;
