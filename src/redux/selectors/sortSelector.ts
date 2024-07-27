import { RootState } from "../store";

export const sortSelector = (state: RootState) => state.filter.sort;
