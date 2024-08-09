import { productType } from "../../@types/productType";

export enum FetchStatus {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export type ProductSlice = {
  items: productType[];
  status: FetchStatus;
};
