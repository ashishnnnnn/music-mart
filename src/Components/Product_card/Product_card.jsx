import "./Product_card.css";
import { useUserData } from "../../context/UserDataContext";
import { is_item_in_wishlist } from "../../utils/is_item_in_wishlist";
import { useToast } from "../../context/ToastContext";

export const Product_card = ({ item }) => {
  const { user_data, setUser_Data } = useUserData();
  const { handleaddtoast } = useToast();
  return (
    <div className="card vertical-card">
      <div className="img-container">
        <img src={item.src} alt={item.categoryName} />
      </div>
      <div className="hero-container">
        <div className="hero">
          <div className="title">{item.title}</div>
        </div>
        {is_item_in_wishlist(user_data.wishlist, item) ? (
          <div
            onClick={() => {
              handleaddtoast({
                message: "Removed from Wishlist",
                type: "alert-success",
              });
              setUser_Data({ type: "REMOVE_FROM_WISHLIST", paylod: item });
            }}
            className="wishlist"
          >
            <i className="fas fa-heart"></i>
          </div>
        ) : (
          <div
            onClick={() => {
              handleaddtoast({
                message: "Added To Wishlist",
                type: "alert-success",
              });
              setUser_Data({ type: "ADD_TO_WISHLIST", paylod: item });
            }}
            className="wishlist"
          >
            <i className="fa fa-heart"></i>
          </div>
        )}
      </div>
      <div className="price-details flex-column">
        <div className="price">Rs. {item.price}</div>
        <div className="rating">
          {Array.from({ length: item.rating }, (v, i) => i).map((_, index) => (
            <i key={index} className="fas fa-star theme-color"></i>
          ))}
        </div>
      </div>
      <a className="cart-add-btn">Add to Cart</a>
    </div>
  );
};
