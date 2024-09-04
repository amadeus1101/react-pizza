import { storageType } from "../@types/storageType";

export function getCart(key: string) {
  const storeData = localStorage.getItem(key);
  if (storeData) {
    const cartData: storageType = JSON.parse(storeData);
    if (cartData) return cartData;
  }
  const obj: storageType = {
    cart: [],
    totalCount: 0,
    totalPrice: 0,
  };
  return obj;
}
