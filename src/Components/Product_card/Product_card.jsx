import "./Product_card.css";
import { useUserData } from "../../context/UserDataContext";
import { is_item_in_wishlist, is_item_in_cart } from "../../utils";
import { useToast } from "../../context/ToastContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

export const Product_card = ({ item, is_wishlist }) => {
  const { user_data, setUser_Data } = useUserData();
  let navigate = useNavigate();
  const { auth_state } = useAuthContext();
  const { token } = auth_state;
  const { handleaddtoast } = useToast();
  return (
    <div
      onClick={() => {
        navigate(`/single-product/${item._id}`);
      }}
      className="card vertical-card"
    >
      <div className="img-container">
        <img src={item.src} alt={item.categoryName} />
      </div>
      <div className="hero-container">
        <div className="hero">
          <div className="title">{item.title}</div>
        </div>
        {is_item_in_wishlist(user_data.wishlist, item) ? (
          <div
            onClick={(e) => {
              e.stopPropagation();
              if (token) {
                handleaddtoast({
                  message: "Removed from Wishlist",
                  type: "alert-success",
                });
                setUser_Data({ type: "REMOVE_FROM_WISHLIST", paylod: item });
              }
            }}
            className="wishlist-btn fnt-2"
          >
            <i className="fas fa-heart"></i>
          </div>
        ) : (
          <div
            onClick={(e) => {
              e.stopPropagation();
              if (token) {
                handleaddtoast({
                  message: "Added To Wishlist",
                  type: "alert-success",
                });
                setUser_Data({ type: "ADD_TO_WISHLIST", paylod: item });
              } else {
                handleaddtoast({
                  message: "Login First To add To Wishlist",
                  type: "alert-warn",
                });
              }
            }}
            className="wishlist-btn fnt-2"
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
      {!is_item_in_cart(user_data.cart, item) ? (
        <div
          onClick={(e) => {
            e.stopPropagation();
            if (token) {
              handleaddtoast({
                message: "Added To Cart",
                type: "alert-success",
              });
              setUser_Data({ type: "ADD_TO_CART", paylod: item });
            } else {
              handleaddtoast({
                message: "Login First To add To Cart",
                type: "alert-warn",
              });
            }
          }}
          className="cart-add-btn"
        >
          Add to Cart
        </div>
      ) : (
        <div
          onClick={(e) => {
            e.stopPropagation();
            navigate("/cart");
          }}
          className="cart-add-btn"
        >
          Go to Cart
        </div>
      )}
    </div>
  );
};
