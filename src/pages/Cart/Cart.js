import "./Cart.css";
import { Horizontal_card } from "../../Components";
import { price_of_cart } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCart } from "../../Features/authentication/authSlice";

export const Cart = () => {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);
  useEffect(() => {
    (async () => {
      dispatch(fetchCart(token));
    })();
  }, []);
  let cart_price = price_of_cart(user?.cart ?? []);
  return (
    <div className="page-container">
      <div className="cart-text flex-center-row pad-1 fnt-1-2 fnt-w-600">
        MY CART
      </div>
      {user?.cart?.length === 0 && (
        <div className="flex-center-row mar-t-1 pad-1 fnt-1-5 fnt-w-600">
          Your Cart is Empty
        </div>
      )}
      <div className="cart flex-center-row gap-1 ali-st">
        {user?.cart?.length > 0 && (
          <div className="cart-items flex-center-column gap-1">
            {user?.cart.map((item) => (
              <Horizontal_card key={item.id} item={item} />
            ))}
          </div>
        )}
        {user?.cart?.length > 0 && (
          <div className="pad-1 width-30  price-details flex-column mar-t-1 gap-0-8">
            <div className="fnt-1-2 fnt-w-600">Price Details</div>
            <div className="spacer"></div>
            <div className="flex jst-sp-sb">
              <div className="fnt-1-2">Price ({user?.cart?.length} Items)</div>
              <div className="fnt-1-2">{cart_price}</div>
            </div>
            <div className="flex jst-sp-sb">
              <div className="fnt-1-2">Delivery Charges</div>
              <div className="fnt-1-2">Rs. 100</div>
            </div>
            <div className="spacer"></div>
            <div className="flex jst-sp-sb fnt-w-600">
              <div className="fnt-1-2">Total Amount</div>
              <div className="fnt-1-2">Rs. {cart_price + 100}</div>
            </div>
            <div className="spacer"></div>
            <a className="purchase pad-0-5 fnt-1-2 flex-center-row">
              Place Order
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
