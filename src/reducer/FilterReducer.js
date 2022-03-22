export function FilterReducer(state, action) {
  const action_type = action.type;
  const action_paylod = action.paylod;
  switch (action_type) {
    case "SORTBY":
      return { ...state, sortby: action_paylod };
    case "PRICE":
      return { ...state, price: action_paylod };
    case "CATEGORY":
      return state.category.includes(action_paylod)
        ? {
            ...state,
            category: state.category.filter((item) => item !== action_paylod),
          }
        : { ...state, category: state.category.concat(action_paylod) };
    case "RATING":
      return { ...state, rating: action_paylod };
    case "CLEAR_FILTER":
      return { sortby: "none", price: 30000, category: [], rating: "none" };
    default:
      return state;
  }
}
