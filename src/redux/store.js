import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import cartParams from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    filter,
    cartParams,
  },
});
