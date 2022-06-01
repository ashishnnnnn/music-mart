import { is_item_in_wishlist } from "../utils";

export function UserDataReducer(state, action) {
  const action_type = action.type;
  switch (action_type) {
    case "ADD_TO_WISHLIST":
      const new_wishlist_after_add = [...state.wishlist, action.paylod];
      return { ...state, wishlist: new_wishlist_after_add };
    case "REMOVE_FROM_WISHLIST":
      const new_wishlist_after_removal = state.wishlist.filter(
        (ele) => ele.id !== action.paylod.id
      );

      return {
        ...state,
        wishlist: new_wishlist_after_removal,
      };

    case "ADD_TO_CART":
      const new_cart_after_add = [...state.cart, { ...action.paylod, qnty: 1 }];
      localStorage.setItem("my_cart", JSON.stringify(new_cart_after_add));
      return { ...state, cart: new_cart_after_add };
    case "REMOVE_FROM_CART":
      const new_cart_after_removal = state.cart.filter(
        (ele) => ele.id !== action.paylod.id
      );
      return {
        ...state,
        cart: new_cart_after_removal,
      };

    case "INCREASE_QUANTITY":
      const new_cart_after_inc_qnt = state.cart.map((ele) =>
        ele.id === action.paylod.id
          ? { ...ele, qnty: ele.qnty + 1 }
          : { ...ele }
      );
      return { ...state, cart: new_cart_after_inc_qnt };
    case "DECREASE_QUANTITY":
      const new_cart_after_dec_qnt = state.cart.map((ele) =>
        ele.id === action.paylod.id
          ? { ...ele, qnty: ele.qnty - 1 }
          : { ...ele }
      );
      return { ...state, cart: new_cart_after_dec_qnt };
    case "FROM_CART_TO_WISHLIST":
      if (is_item_in_wishlist(state.wishlist, action.paylod)) {
        return state;
      } else {
        const new_wishlist_from_cart = [
          ...state.wishlist,
          { ...action.paylod, qnty: 0 },
        ];
        return { ...state, wishlist: new_wishlist_from_cart };
      }
    case "RESET_CART":
      console.log("chala");
      return { ...state, cart: [] };
    case "RESET":
      return { wishlist: [], cart: [], addresses: [] };
    default:
      return state;
  }
}
