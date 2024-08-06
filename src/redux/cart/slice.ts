import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItemType } from "../../@types/CartItemType";
import { StorageType } from "../../@types/StorageType";

const initialState: StorageType = {
  cart: [],
  totalCount: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartData(state, action: PayloadAction<StorageType>) {
      state.cart = action.payload.cart;
      state.totalCount = action.payload.totalCount;
      state.totalPrice = action.payload.totalPrice;
    },
    addItem(state, action: PayloadAction<CartItemType>) {
      const obj = action.payload;
      const index = state.cart.findIndex((elem) => elem.hash === obj.hash);
      state.totalCount++;
      state.totalPrice += obj.price;
      if (index > -1) {
        state.cart[index].count++;
      } else {
        state.cart = [...state.cart, obj];
      }
    },
    minusItem(state, action: PayloadAction<string>) {
      const hash = action.payload;
      const index = state.cart.findIndex((elem) => elem.hash === hash);
      state.totalCount--;
      state.totalPrice -= state.cart[index].price;
      if (state.cart[index].count > 1) {
        state.cart[index].count--;
      } else {
        state.cart = state.cart.filter((item) => item.hash !== hash);
      }
    },
    popItem(state, action: PayloadAction<string>) {
      const hash = action.payload;
      const index = state.cart.findIndex((elem) => elem.hash === hash);
      state.totalCount -= state.cart[index].count;
      state.totalPrice -= state.cart[index].price * state.cart[index].count;
      state.cart = state.cart.filter((item) => item.hash !== hash);
    },
    clearCart(state) {
      state.cart = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const { setCartData, addItem, minusItem, popItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
