
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.1.10:3000/api/" }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
      providesTags: ["Product"],
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
      providesTags: (result, error, id) => [{ type: "Product", id }],
    }),
    createProduct: builder.mutation({
      query: (newProduct) => ({
        url: "products",
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useCreateProductMutation,
} = productsApi;
