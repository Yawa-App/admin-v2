import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { apiSlice } from '@/components/features/app/apiSlice';
import { otherApi } from '../app/otherApi';
import authReducer from '../slide/authSlice';

// Combine reducers
const rootReducer = combineReducers({
  auth: authReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
  [otherApi.reducerPath]: otherApi.reducer,
  // Add other reducers here
});

// Configure the store without redux-persist
export const store = configureStore({
  reducer: rootReducer, // Use the rootReducer directly
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware, otherApi.middleware),
});
