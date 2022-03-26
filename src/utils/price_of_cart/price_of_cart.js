export const price_of_cart = (cart) => {
  let price = cart.reduce(
    (accum, ele) => (accum += Number(ele.price) * Number(ele.qnty)),
    0
  );
  return price;
};
