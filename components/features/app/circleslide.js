// authCirclesApiSlice.ts
import { apiSlice } from "./apiSlice";


export const authCirclesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCircles: builder.query({
      query: () => ({
        url: '/api/admin/circles',
        method: 'GET',
        params: { page: 1, limit: 30 },
      }),
    }),
  }),
});

export const { useGetCirclesQuery } = authCirclesApiSlice;
