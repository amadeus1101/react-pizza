import { CartItemType } from "../../@types/CartItemType";

export type CartSlice = {
  cart: CartItemType[];
  totalCount: number;
  totalPrice: number;
};
