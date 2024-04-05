import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const service = createApi({
  reducerPath: "service",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/v1/" }),
  endpoints: (builder) => ({
    getAllChats: builder.query({ query: () => `chat/get/` }),
  }),
});
