import { apiSlice } from "./apiSlice";


export const lgaApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createLocalGovernment: builder.mutation({
            query: (credentials) => ({
                url: '/api/admin/local/invite',
                method: 'POST',
                body: credentials,
            }),
        }),
        getAllLocalGovernment: builder.query({
            query: () => ({
                url: '/api/admin/local/invite',
                method: 'GET',
                params: { page: 1, limit: 50 },
            }),
        }),
    }),
});

export const { useCreateLocalGovernmentMutation, useGetAllLocalGovernmentQuery } = lgaApi;