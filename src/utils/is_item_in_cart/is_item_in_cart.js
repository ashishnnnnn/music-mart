export const is_item_in_cart = (cart, item) => {
  for (let ele of cart) {
    if (ele.id === item.id) {
      return true;
    }
  }
  return false;
};
