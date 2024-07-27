import { sortType } from "./sortType";

export type filtersType = {
  category: number;
  sort: sortType;
  page: number;
  search: string;
};
