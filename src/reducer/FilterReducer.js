export function FilterReducer(state, action) {
  const action_type = action.type;
  const action_paylod = action.paylod;
  switch (action_type) {
    case "sortby":
      return { ...state, sortby: action_paylod };
    case "price":
      return { ...state, price: action_paylod };
    case "category":
      return state.category.includes(action_paylod)
        ? {
            ...state,
            category: state.category.filter((item) => item !== action_paylod),
          }
        : { ...state, category: state.category.concat(action_paylod) };
    case "rating":
      return { ...state, rating: action_paylod };
    case "clear_filter":
      return { sortby: "none", price: 30000, category: [], rating: "none" };
    default:
      return state;
  }
}
