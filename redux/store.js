import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./productsApi";
import wishlistReducer from "./wishlistSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    wishlist: wishlistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
