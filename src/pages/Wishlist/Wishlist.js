import "./Wishlist.css";
import { Product_card } from "../../Components";
import { fetchWishlist } from "../../Features/authentication/authSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Wishlist = () => {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);
  useEffect(() => {
    (async () => {
      dispatch(fetchWishlist(token));
    })();
  }, []);
  return (
    <div class="page-container">
      <div class="flex-center-row mar-t-1 pad-1 fnt-2 fnt-w-600">
        MY WISHLIST
      </div>
      {user?.wishlist?.length === 0 && (
        <div class="flex-center-row mar-t-1 pad-1 fnt-1-5 fnt-w-600">
          Your Wishlist is Empty
        </div>
      )}
      {user?.wishlist?.length > 0 && (
        <div className="wishlist responsive-grid">
          {user.wishlist.map((item) => (
            <div key={item.id}>
              <Product_card item={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
