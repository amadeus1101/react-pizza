import { SortType } from "../../@types/SortType";

export type FiltersType = {
  category: number;
  sort: SortType;
  page: number;
  search: string;
};
