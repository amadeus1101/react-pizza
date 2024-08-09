import { storageType } from "../@types/storageType";

export function updateCart(data: storageType) {
  const string = JSON.stringify(data);
  localStorage.setItem("react-pizza-cart", string);
}
