// authCirclesApiSlice.ts
import { apiSlice } from "./apiSlice";

export const authReponderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getResponder: builder.query({
      query: () => ({
        url: '/api/admin/responders',
        method: 'GET',
     
      }),
    }),
  }),
});

export const { useGetResponderQuery } = authReponderApiSlice;
