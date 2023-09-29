import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://newsapi.org" }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () =>
        "/v2/top-headlines?sources=techcrunch&apiKey=2513bd1ac63e4aea8363337835c1d4da",
    }),
  }),
});

export const { useGetTodosQuery } = apiSlice;
