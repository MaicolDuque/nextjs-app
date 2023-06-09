import { apiSlice } from "../apiSlice"
import type { Product } from "../types/Product";

export const productsApiSlice = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: builder => ({
    getProducts: builder.query<Product[], undefined>({
      query: () => '/products?limit=100&offset=0',
      transformResponse(baseQueryReturnValue: Product[]) {
        return baseQueryReturnValue
      },
      providesTags: (_result) => [{ type: 'Products', id: 'LIST' }],
    }),
    updateProduct: builder.mutation<Product, Product>({
      query(post) {
        const { id, ...body } = post
        return {
          url: `/products/${id}`,
          method: 'PUT',
          body
        }
      },
      // Invalidates all queries that subscribe to this Post `id` only.
      // In this case, `getProducts` will be re-run. `getProducts` *might*  rerun, if this id was under its results.
      invalidatesTags: (result, error, { id }) => [{ type: 'Products', id: 'LIST' }]
    }),
    deleteProduct: builder.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `/products/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'Products', id: 'LIST' }],
    }),

    addProduct: builder.mutation<Product, Partial<Product>>({
      query(body) {
        return {
          url: `/products`,
          method: 'POST',
          body,
        }
      },
      invalidatesTags: [{ type: 'Products', id: 'LIST' }],
    }),
  })
})

export const { useGetProductsQuery, useUpdateProductMutation, useDeleteProductMutation, useAddProductMutation } = productsApiSlice
