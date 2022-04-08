export const get_product_from_id = (id, product_list) => {
  let ret_product = {};
  for (let i = 0; i < product_list.length; i++) {
    if (product_list[i]._id === id) {
      ret_product = product_list[i];

      return ret_product;
    }
  }
  return ret_product;
};
