import { RootState } from "../store";

export const filterSelector = (state: RootState) => state.filters;
export const sortSelector = (state: RootState) => state.filters.sort;
