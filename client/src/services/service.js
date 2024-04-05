import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const service = createApi({
  reducerPath: "service",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://chat-application-backend-phi.vercel.app/api/v1/",
  }),
  endpoints: (builder) => ({
    getAllChats: builder.query({ query: () => `chat/get/` }),
  }),
});
