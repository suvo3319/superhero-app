import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/",
  }),
  tagTypes: ["heroes"],
  endpoints: (builder) => ({
    getHeroes: builder.query({
      query: () => "superheroes",
      providesTags: ["heroes"],
    }),
    postHeroes: builder.mutation({
      query: (post) => ({
        url: "superheroes",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["heroes"],
    }),
  }),
});

export const { useGetHeroesQuery, usePostHeroesMutation } = Api;
