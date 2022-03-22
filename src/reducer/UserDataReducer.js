export function UserDataReducer(state, action) {
  const action_type = action.type;
  switch (action_type) {
    case "ADD_TO_WISHLIST":
      const new_wishlist_after_add = [...state.wishlist, action.paylod];
      localStorage.setItem(
        "my_wishlist",
        JSON.stringify(new_wishlist_after_add)
      );
      return { ...state, wishlist: new_wishlist_after_add };
    case "REMOVE_FROM_WISHLIST":
      const new_wishlist_after_removal = state.wishlist.filter(
        (ele) => ele.id !== action.paylod.id
      );
      localStorage.setItem(
        "my_wishlist",
        JSON.stringify(new_wishlist_after_removal)
      );
      return {
        ...state,
        wishlist: new_wishlist_after_removal,
      };
    case "GET_WISHLIST_LOCALLY":
      const local_wishlist = JSON.parse(localStorage.getItem("my_wishlist"));
      if (local_wishlist && local_wishlist.length) {
        return { ...state, wishlist: local_wishlist };
      }
      return state;
    default:
      return state;
  }
}
