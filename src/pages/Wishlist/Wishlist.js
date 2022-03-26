import "./Wishlist.css";
import { useUserData } from "../../context/UserDataContext";
import { Product_card } from "../../Components";

export const Wishlist = () => {
  const { user_data } = useUserData();
  return (
    <div class="page-container">
      <div class="flex-center-row mar-t-1 pad-1 fnt-2 fnt-w-600">
        MY WISHLIST
      </div>
      {user_data.wishlist.length === 0 && (
        <div class="flex-center-row mar-t-1 pad-1 fnt-1-5 fnt-w-600">
          Your Wishlist is Empty
        </div>
      )}
      {user_data.wishlist.length > 0 && (
        <div className="wishlist responsive-grid">
          {user_data.wishlist.map((item) => (
            <div key={item.id}>
              <Product_card item={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
