import { apiSlice } from "./apiSlice";

export const reportCategoriesSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: '/api/admin/category',
        method: 'GET',
        // params: { page: 1, limit: 30 },
      }),
    }),
  }),
});

export const { useGetCategoriesQuery } = reportCategoriesSlice;