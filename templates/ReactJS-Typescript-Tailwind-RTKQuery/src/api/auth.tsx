import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuthInterceptor, prepareHeaders } from "./utils";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithAuthInterceptor({
    baseUrl: `/api/admin/`,
    prepareHeaders: prepareHeaders,
  }),
  tagTypes: ["CurrentUser"],
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: () => "profile",
      providesTags: ["CurrentUser"],
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["CurrentUser"],
    }),
    forgotPassword: builder.mutation({
      query: (body) => ({
        url: "forgotPassword",
        method: "POST",
        body,
      }),
      invalidatesTags: ["CurrentUser"],
    }),
  }),
});

export const {
  useGetCurrentUserQuery,
  useLoginMutation,
  useForgotPasswordMutation,
} = authApi;
