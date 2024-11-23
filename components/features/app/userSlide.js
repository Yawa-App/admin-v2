import { apiSlice } from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: '/api/admin/users',
        method: 'GET',
        params: { page: 1, limit: 30 },
      }),
    }),
  }),
});

export const { useGetUsersQuery } = authApiSlice;