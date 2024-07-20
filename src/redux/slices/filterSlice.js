import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: { name: "популярности 🔽", sortType: "rating", order: "asc" },
  query: "",
  page: 1,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setQuery(state, action) {
      state.query = action.payload;
    },
    setCurrentPage(state, action) {
      state.page = action.payload;
    },
  },
});

export const { setCategoryId, setSort, setQuery, setCurrentPage } =
  filterSlice.actions;

export default filterSlice.reducer;
