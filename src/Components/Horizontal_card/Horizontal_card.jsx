import "./Horizontal_card.css";
import { useToast } from "../../context/ToastContext";
import { changeQtyCart } from "../../Features/authentication/authSlice";
import { removeFromCart } from "../../Features/authentication/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { is_item_in_wishlist } from "../../utils";
import { addToWishlist } from "../../Features/authentication/authSlice";
import { useNavigate } from "react-router";

export const Horizontal_card = ({ item }) => {
  let navigate = useNavigate();
  const { handleaddtoast } = useToast();
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);
  return (
    <div className="card horizantal-card">
      <div className="img-container">
        <img src={item.src} alt={item.categoryName} />
      </div>
      <div className="hero-container gap-1">
        <div className="hero">
          <div className="title">{item.title}</div>
          <div className="price-container">
            <div className="discount-price">Rs {item.price}</div>
          </div>
        </div>
        <div className="qunatity-container flex-center-row gap-0-5 jst-sp-st">
          <p>Quantity :</p>
          <div
            onClick={() => {
              dispatch(
                changeQtyCart({
                  product_id: item._id,
                  user_token: token,
                  type: "increment",
                })
              );
              handleaddtoast({
                message: "Increased the Quantity",
                type: "alert-success",
              });
            }}
            className="flex-center-row change-qnt add pad-2px"
          >
            <i className="fas fa-plus"></i>
          </div>
          <p className="flex-center-row quantity">{item.qty}</p>
          {item.qty > 1 && (
            <div
              onClick={() => {
                dispatch(
                  changeQtyCart({
                    product_id: item._id,
                    user_token: token,
                    type: "decrement",
                  })
                );
                handleaddtoast({
                  message: "Decreased the Quantity",
                  type: "alert-success",
                });
              }}
              className="flex-center-row change-qnt remove pad-2px"
            >
              <i className="fas fa-minus"></i>
            </div>
          )}
        </div>
        <div className="card-btn flex-center-column">
          <div
            onClick={() => {
              dispatch(
                removeFromCart({
                  product_id: item._id,
                  user_token: token,
                })
              );
              handleaddtoast({
                message: "Removed From Cart",
                type: "alert-success",
              });
            }}
            className="cart-add-btn"
          >
            Remove From Cart
          </div>
          {is_item_in_wishlist(user?.wishlist ?? [], item) ? (
            <div
              onClick={() => {
                navigate("/wishlist");
              }}
              className="second-btn mar-t-1 fnt-1-2 flex-center-row"
            >
              Go To Wishlist
            </div>
          ) : (
            <div
              onClick={async () => {
                await dispatch(
                  removeFromCart({
                    product_id: item._id,
                    user_token: token,
                  })
                );
                await dispatch(
                  addToWishlist({ product: item, user_token: token })
                );
                handleaddtoast({
                  message: "Moved To Wishlist",
                  type: "alert-success",
                });
              }}
              className="second-btn mar-t-1 fnt-1-2 flex-center-row"
            >
              Move To Wishlist
            </div>
          )}
        </div>
        <div></div>
      </div>
    </div>
  );
};
