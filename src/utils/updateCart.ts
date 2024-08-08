import { StorageType } from "../@types/StorageType";

export function updateCart(data: StorageType) {
  const string = JSON.stringify(data);
  localStorage.setItem("react-pizza-cart", string);
}
