export const is_item_in_wishlist = (wishlist, item) => {
  for (let ele of wishlist) {
    if (ele.id === item.id) {
      return true;
    }
  }
  return false;
};
