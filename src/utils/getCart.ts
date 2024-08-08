export function getCart(key: string) {
  const storeData = localStorage.getItem(key);
  if (storeData) {
    const cartData = JSON.parse(storeData);
    if (cartData) return cartData;
  }
}
