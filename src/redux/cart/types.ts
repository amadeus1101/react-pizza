import { CartItemType } from "../../@types/CartItemType";

export type CartSliceType = {
  cart: CartItemType[];
  totalCount: number;
  totalPrice: number;
};
