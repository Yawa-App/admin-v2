import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASEURLAPI } from "../../utils/api";
import { logOut } from "../slide/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: BASEURLAPI,
  prepareHeaders: (headers) => {
    const token =
      typeof window !== "undefined"
        ? localStorage.getItem("accessToken")
        : null;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithAuthCheck = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    // Token has expired or is invalid
    api.dispatch(logOut());
    // Optional: Add error handling or redirection
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithAuthCheck,
  endpoints: () => ({}), // Ensure endpoints is defined, even if empty
});
