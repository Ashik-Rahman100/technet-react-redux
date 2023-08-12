import { api } from '@/redux/api/apiSlice';

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => `/products`,
    }),
    singleProduct: builder.query({
      query: (id) => `/product/${id}`,
    }),
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: `POST`,
        body: data,
      }),
      invalidatesTags: ['comment'],
    }),
    getComment: builder.query({
      query: (id) => `/comment/${id}`,
      providesTags: ['comment'],
    }),
  }),
});
export const {
  useGetProductQuery,
  usePostCommentMutation,
  useGetCommentQuery,
  useSingleProductQuery,
} = productApi;
