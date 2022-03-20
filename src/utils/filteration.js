function category_handle(product_data, state) {
  if (state.category.length !== 0) {
    return product_data.filter((ele) =>
      state.category.includes(ele.categoryName)
    );
  }
  return product_data;
}

function rating_handle(product_data, state) {
  if (state.rating !== "none") {
    return product_data.filter(
      (ele) => Number(ele.rating) >= Number(state.rating)
    );
  }
  return product_data;
}

function price_handle(product_data, state) {
  return product_data.filter((ele) => Number(ele.price) <= Number(state.price));
}

function sorting_handle(data, state) {
  const sortby = state.sortby;
  let product_data = [...data];
  switch (sortby) {
    case "High_to_low":
      return product_data.sort(function (a, b) {
        return Number(b.price) - Number(a.price);
      });
    case "Low_to_high":
      return product_data.sort(function (a, b) {
        return Number(a.price) - Number(b.price);
      });
    default:
      return product_data;
  }
}

function compose_fn(state, ...args) {
  return (data) => {
    return args.reduce((accum, curr) => curr(accum, state), data);
  };
}

export const filteration = (data, state) => {
  return compose_fn(
    state,
    category_handle,
    rating_handle,
    price_handle,
    sorting_handle
  )(data);
};
