import { apiSlice } from "../apiSlice"
import type { Supplier } from "../types/Supplier";

export const productsApiSlice = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: builder => ({
    getSuppliers: builder.query<Supplier[], undefined>({
      query: () => '/users?limit=15',
      transformResponse(baseQueryReturnValue: Supplier[], meta, arg) {
        return baseQueryReturnValue.map(supplier => {
          const { id, avatar, updatedAt, ...rest } = supplier
          return { id, avatar, ...rest }
        })
      },
      providesTags: (_result) => [{ type: 'Suppliers', id: 'LIST' }],
    }),

    updateSupplier: builder.mutation<Supplier, Supplier>({
      query(post) {
        const { id, ...body } = post
        return {
          url: `/users/${id}`,
          method: 'PUT',
          body
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: 'Suppliers', id: 'LIST' }]
    }),

    deleteSupplier: builder.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `/users/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'Suppliers', id: 'LIST' }],
    }),

    addSupplier: builder.mutation<Supplier, Partial<Supplier>>({
      query(body) {
        return {
          url: `/users`,
          method: 'POST',
          body,
        }
      },
      invalidatesTags: [{ type: 'Suppliers', id: 'LIST' }],
    }),
  })
})

export const { useGetSuppliersQuery, useDeleteSupplierMutation, useAddSupplierMutation, useUpdateSupplierMutation } = productsApiSlice
