import { service } from "./service";

const userService = service.injectEndpoints({
  endpoints: (build) => ({
    // User Create
    createUser: build.mutation({
      query: (body) => ({
        url: `user/create`,
        method: "POST",
        body,
      }),
    }),
    // User Login
    loginUser: build.mutation({
      query: (body) => ({
        url: `user/login`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreateUserMutation, useLoginUserMutation } = userService;
