import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
import type { Supplier } from "./types/Supplier";

const headers = { 'Authorization': `Bearer ${Cookies.get('token')}` }
export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  refetchOnReconnect: true,
  tagTypes: ['Products', 'Suppliers'],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL, headers }),
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => '/auth/profile'
    })
  })
})

export const { useGetProfileQuery } = apiSlice
