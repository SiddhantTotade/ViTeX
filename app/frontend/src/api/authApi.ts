import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const PATH = "http://127.0.0.1:8000/auth/api/";

export const authApi = createApi({
  reducerPath: "authAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: PATH,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (payload) => ({
        url: "login/",
        method: "POST",
        body: payload,
      }),
    }),
    register: builder.mutation({
      query: (payload) => ({
        url: "register/",
        method: "POST",
        body: payload,
      }),
    }),

    logout: builder.query({
      query: () => ({
        url: "logout/",
        method: "GET",
      }),
    }),
    profile: builder.query({
      query: () => ({
        url: "profile/",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useProfileQuery,
  useLoginMutation,
  useLazyLogoutQuery,
  useRegisterMutation,
} = authApi;
