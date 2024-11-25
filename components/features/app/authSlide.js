import { apiSlice } from "./apiSlice";


export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/api/admin/auth/login',
        method: 'POST',
        body: credentials,
      }),
      transformResponse: (response) => {
        if (response.token) {
          document.cookie = `token=${response.token}; path=/`
        }
        return response
      },
    }),
    emailVerification: builder.mutation({
      query: (data) => ({
        url: '/api/admin/email/verification',
        method: 'POST',
        body: data,
      }),
    }),
    createPassword: builder.mutation({
      query: (data) => ({
        url: '/api/admin/create/password',
        method: 'POST',
        body: data,
      }),

    }),
    createCategories: builder.mutation({
      query: (data) => ({
        url: '/api/admin/category',
        method: 'POST',
        body: data,
      })
    }),
    getcategories: builder.query({
      query: () => ({
        url: '/api/admin/category',
        method: 'GET',
      }),
    }),
    
  }),
});

export const { useLoginMutation, useGetcategoriesQuery, useCreateCategoriesMutation, useCreatePasswordMutation, useEmailVerificationMutation } = authApiSlice;