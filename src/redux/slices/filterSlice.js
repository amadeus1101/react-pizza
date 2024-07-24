import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: 0,
  sort: { name: "популярности 🔽", sortType: "rating", order: "asc" },
  search: "",
  page: 1,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setFilters(state, action) {
      state.category = Number(action.payload.category);
      state.page = Number(action.payload.page);
      state.sort = {
        name: action.payload.name,
        order: action.payload.order,
        sortType: action.payload.sortby,
      };
    },
  },
});

export const { setCategory, setSort, setSearch, setPage, setFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
