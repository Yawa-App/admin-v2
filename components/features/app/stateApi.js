import { apiSlice } from "./apiSlice";


export const stateApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createstate: builder.mutation({
            query: (credentials) => ({
                url: '/api/admin/state/invite',
                method: 'POST',
                body: credentials,
            }),
        }),
        getAllStates: builder.query({
            query: () => ({
                url: '/api/admin/state/invite',
                method: 'GET',
                params: { page: 1, limit: 50 },
            }),
        }),
        getState: builder.query({
            query: (stateId) => ({
              url: `/api/admin/state/invite/${stateId}`,
              method: 'GET',
            }),
        }),
    }),
});

export const { useCreatestateMutation, useGetAllStatesQuery, useGetStateQuery } = stateApi;