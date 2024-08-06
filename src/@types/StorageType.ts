import { CartItemType } from "./CartItemType";

export type StorageType = {
  cart: CartItemType[];
  totalCount: number;
  totalPrice: number;
};
