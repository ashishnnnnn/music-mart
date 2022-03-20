export function UserDataReducer(state, action) {
  const action_type = action.type;
  switch (action_type) {
    case "add_to_wishlist":
      const new_wishlist_after_add = [...state.wishlist, action.paylod];
      localStorage.setItem(
        "my_wishlist",
        JSON.stringify(new_wishlist_after_add)
      );
      return { ...state, wishlist: new_wishlist_after_add };
    case "remove_from_wishlist":
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
    case "get_wishlist_locally":
      const local_wishlist = JSON.parse(localStorage.getItem("my_wishlist"));
      if (local_wishlist && local_wishlist.length) {
        return { ...state, wishlist: local_wishlist };
      }
      return state;
    default:
      return state;
  }
}
