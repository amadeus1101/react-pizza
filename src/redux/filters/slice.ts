import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SortType } from "../../@types/SortType";
import { FiltersType } from "../../@types/FiltersType";
import { QueryType } from "../../@types/QueryType";
import { setInitialState } from "./setInitialState";

const initialState: FiltersType = setInitialState();

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<number>) {
      state.category = action.payload;
    },
    setSort(state, action: PayloadAction<SortType>) {
      state.sort = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setFilters(state, action: PayloadAction<QueryType>) {
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
