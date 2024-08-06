import { StorageType } from "../@types/StorageType";

export function updateStorage(data: StorageType) {
  const string = JSON.stringify(data);
  localStorage.setItem("react-pizza-cart", string);
}
