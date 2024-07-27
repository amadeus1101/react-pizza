import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { DATA_URL } from "../../constants";
import { filtersType } from "../../@types/filterType";

export const fetchData = createAsyncThunk(
  "pizza/fetchPizzaStatus",
  async (params: filtersType) => {
    const { sort, category, search, page } = params;
    const { data } = await axios.get(
      DATA_URL +
        `?page=${page}&limit=4${
          category !== 0 ? "&category=" + category : ""
        }&sortby=${sort.sortby}&order=${sort.order}${
          search ? "&search=" + search : ""
        }`
    );
    return data;
  }
);

const initialState = {
  items: [],
  status: "loading",
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.items = [];
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "success";
      })
      .addCase(fetchData.rejected, (state) => {
        state.items = [];
        state.status = "error";
      });
  },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
