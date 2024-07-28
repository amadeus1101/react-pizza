import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SortType } from "../../@types/SortType";
import { FiltersType } from "./types";

const initialState: FiltersType = {
  category: 0,
  sort: { name: "популярности 🔽", sortby: "rating", order: "asc" },
  search: "",
  page: 1,
};

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
    /*TODO: MAKE CORRECT ACTION TYPE*/
    setFilters(state, action) {
      state.category = Number(action.payload.category);
      state.page = Number(action.payload.page);
      state.sort = {
        name: action.payload.name,
        order: action.payload.order,
        sortby: action.payload.sortby,
      };
    },
  },
});

export const { setCategory, setSort, setSearch, setPage, setFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
