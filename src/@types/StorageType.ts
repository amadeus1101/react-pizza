import { cartItemType } from "./cartItemType";

export type storageType = {
  cart: cartItemType[];
  totalCount: number;
  totalPrice: number;
};
