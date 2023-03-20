import { apiSlice } from "../apiSlice"
import type { Supplier } from "../types/Supplier";

export const productsApiSlice = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: builder => ({
    getSuppliers: builder.query<Supplier[], undefined>({
      query: () => '/users?limit=15',
      transformResponse(baseQueryReturnValue: Supplier[], meta, arg) {
        return baseQueryReturnValue.map(supplier => {
          const { id, avatar, password, updatedAt, ...rest } = supplier
          return { id, avatar, ...rest }
        })
      },
    })
  })
})

export const { useGetSuppliersQuery } = productsApiSlice
