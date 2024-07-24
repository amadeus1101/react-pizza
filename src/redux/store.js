import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import cartParams from "./slices/cartSlice";
import pizza from "./slices/pizzaSlice";

export const store = configureStore({
  reducer: {
    filter,
    cartParams,
    pizza,
  },
});
