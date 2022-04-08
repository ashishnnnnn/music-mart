export const get_searched_result = (searchValue, product_list) => {
  searchValue = searchValue.trim();
  const searched_result = [];
  if (searchValue.length === 0) {
    return searched_result;
  } else {
    product_list.forEach((element) => {
      if (element.title.toLowerCase().includes(searchValue.toLowerCase())) {
        searched_result.push({
          _id: element._id,
          title: element.title,
        });
      }
    });
    return searched_result;
  }
};
