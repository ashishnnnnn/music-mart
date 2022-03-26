import "./Horizontal_card.css";
import { useUserData } from "../../context/UserDataContext";
import { useToast } from "../../context/ToastContext";

export const Horizontal_card = ({ item }) => {
  const { setUser_Data } = useUserData();
  const { handleaddtoast } = useToast();
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
              handleaddtoast({
                message: "Increased the Quantity",
                type: "alert-success",
              });
              setUser_Data({ type: "INCREASE_QUANTITY", paylod: item });
            }}
            className="flex-center-row change-qnt add pad-2px"
          >
            <i className="fas fa-plus"></i>
          </div>
          <p className="flex-center-row quantity">{item.qnty}</p>
          {item.qnty > 1 && (
            <div
              onClick={() => {
                handleaddtoast({
                  message: "Increased the Quantity",
                  type: "alert-success",
                });
                setUser_Data({ type: "DECREASE_QUANTITY", paylod: item });
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
              handleaddtoast({
                message: "Removed From Cart",
                type: "alert-success",
              });
              setUser_Data({ type: "REMOVE_FROM_CART", paylod: item });
            }}
            className="cart-add-btn"
          >
            Remove From Cart
          </div>
          <div
            onClick={() => {
              handleaddtoast({
                message: "Moved To Wishlist",
                type: "alert-success",
              });
              setUser_Data({ type: "REMOVE_FROM_CART", paylod: item });
              setUser_Data({ type: "FROM_CART_TO_WISHLIST", paylod: item });
            }}
            className="second-btn mar-t-1 fnt-1-2 flex-center-row"
          >
            Move To Wishlist
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
