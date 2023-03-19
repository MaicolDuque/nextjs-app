import { apiSlice } from "../apiSlice"
import type { Product } from "../types/Product";

export const productsApiSlice = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: builder => ({
    getProducts: builder.query<Product[], undefined>({
      query: () => '/products?limit=10&offset=0',
      transformResponse(baseQueryReturnValue: Product[]) {
        return baseQueryReturnValue
      },
    })
  })
})

export const { useGetProductsQuery } = productsApiSlice
