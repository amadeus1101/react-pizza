import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { DATA_URL } from "../../constants";
import { filtersType } from "../../@types/filterType";
import { pizzaItemType } from "../../@types/pizzaItemType";

export enum FetchStatus {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export const fetchData = createAsyncThunk<pizzaItemType[], filtersType>(
  "pizza/fetchPizzaStatus",
  async (params) => {
    const { sort, category, search, page } = params;
    const { data } = await axios.get<pizzaItemType[]>(
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

interface IPizzaSlice {
  items: pizzaItemType[];
  status: FetchStatus;
}

const initialState: IPizzaSlice = {
  items: [],
  status: FetchStatus.LOADING,
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<pizzaItemType[]>) {
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
        (state, action: PayloadAction<pizzaItemType[]>) => {
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

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
