import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalCount: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartData(state, action) {
      state.cart = action.payload.cart;
      state.totalCount = action.payload.totalCount;
      state.totalPrice = action.payload.totalPrice;
    },
    addItem(state, action) {
      const obj = action.payload;
      const hash = obj.title + obj.type + obj.size;
      const index = state.cart.findIndex((elem) => elem.hash === hash);
      state.totalCount++;
      state.totalPrice += obj.price;

      if (index > -1) {
        state.cart[index].count++;
      } else {
        const count = 1;
        state.cart.push({ ...obj, hash, count });
      }
      localStorage.setItem("react-pizza", JSON.stringify(state));
    },
    removeItem(state, action) {
      const hash = action.payload;
      const index = state.cart.findIndex((elem) => elem.hash === hash);
      state.totalCount--;
      state.totalPrice -= state.cart[index].price;
      if (state.cart[index].count > 1) {
        state.cart[index].count--;
      } else {
        state.cart = state.cart.filter((item) => item.hash !== hash);
      }
      localStorage.setItem("react-pizza", JSON.stringify(state));
    },
    deleteItem(state, action) {
      const hash = action.payload;
      const index = state.cart.findIndex((elem) => elem.hash === hash);
      state.totalCount -= state.cart[index].count;
      state.totalPrice -= state.cart[index].price * state.cart[index].count;
      state.cart = state.cart.filter((item) => item.hash !== hash);
      localStorage.setItem("react-pizza", JSON.stringify(state));
    },
    clearCart(state, action) {
      state.cart = [];
      state.totalCount = 0;
      state.totalPrice = 0;
      localStorage.setItem("react-pizza", JSON.stringify(state));
    },
  },
});

export const { setCartData, addItem, removeItem, deleteItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
