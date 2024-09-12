import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const PATH = "http://127.0.0.1:8000/app/api/";

export const appApi = createApi({
  reducerPath: "appAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: PATH,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getIpAddress: builder.mutation({
      query: (payload) => ({
        url: "get-ip-address/",
        method: "POST",
        body: payload,
      }),
    }),
    transferData: builder.mutation({
      query: (payload) => ({
        url: "transfer-data/",
        method: "POST",
        body: payload,
      }),
    }),
    scheduleTransferData: builder.mutation({
      query: (payload) => ({
        url: "schedule-transfer-data/",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const {
  useGetIpAddressMutation,
  useTransferDataMutation,
  useScheduleTransferDataMutation,
} = appApi;
