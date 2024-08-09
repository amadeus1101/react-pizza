import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sortType } from "../../@types/sortType";
import { filtersType } from "../../@types/filtersType";
import { queryType } from "../../@types/queryType";
import { setInitialState } from "./setInitialState";

const initialState: filtersType = setInitialState();

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<number>) {
      state.category = action.payload;
    },
    setSort(state, action: PayloadAction<sortType>) {
      state.sort = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setFilters(state, action: PayloadAction<queryType>) {
      state.category = action.payload.category;
      state.page = action.payload.page;
      state.sort = {
        name: action.payload.name,
        sortby: action.payload.sortby,
      };
    },
  },
});

export const { setCategory, setSort, setSearch, setPage, setFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
