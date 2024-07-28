import { ProductType } from "../../@types/ProductType";

export enum FetchStatus {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export type ProductSlice = {
  items: ProductType[];
  status: FetchStatus;
};
