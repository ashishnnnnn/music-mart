export const price_of_cart = (cart) => {
  let final_price = cart.reduce(
    (final_price, item) =>
      (final_price += Number(item.price) * Number(item.qty)),
    0
  );
  return final_price;
};
