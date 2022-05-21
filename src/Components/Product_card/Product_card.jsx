import "./Product_card.css";
import { is_item_in_wishlist, is_item_in_cart } from "../../utils";
import { useToast } from "../../context/ToastContext";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../../Features/authentication/authSlice";
import { removeFromWishlist } from "../../Features/authentication/authSlice";
import { addToCart } from "../../Features/authentication/authSlice";

export const Product_card = ({ item, is_wishlist }) => {
  let navigate = useNavigate();
  const { handleaddtoast } = useToast();
  const { token, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
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
        {is_item_in_wishlist(user?.wishlist ?? [], item) ? (
          <div
            onClick={(e) => {
              e.stopPropagation();
              if (token) {
                dispatch(
                  removeFromWishlist({
                    product_id: item._id,
                    user_token: token,
                  })
                );
                handleaddtoast({
                  message: "Removed from Wishlist",
                  type: "alert-success",
                });
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
                dispatch(addToWishlist({ product: item, user_token: token }));
                handleaddtoast({
                  message: "Added To Wishlist",
                  type: "alert-success",
                });
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
      {!is_item_in_cart(user?.cart ?? [], item) ? (
        <div
          onClick={(e) => {
            e.stopPropagation();
            if (token) {
              dispatch(addToCart({ product: item, user_token: token }));
              handleaddtoast({
                message: "Added To Cart",
                type: "alert-success",
              });
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
