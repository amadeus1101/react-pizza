import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FetchStatus, ProductSlice } from "./types";
import { productType } from "../../@types/productType";
import { fetchData } from "./asyncActions";

const initialState: ProductSlice = {
  items: [],
  status: FetchStatus.LOADING,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<productType[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.items = [];
        state.status = FetchStatus.LOADING;
      })
      .addCase(
        fetchData.fulfilled,
        (state, action: PayloadAction<productType[]>) => {
          state.items = action.payload;
          state.status = FetchStatus.SUCCESS;
        }
      )
      .addCase(fetchData.rejected, (state) => {
        state.items = [];
        state.status = FetchStatus.ERROR;
      });
  },
});

export const { setItems } = productSlice.actions;

export default productSlice.reducer;
