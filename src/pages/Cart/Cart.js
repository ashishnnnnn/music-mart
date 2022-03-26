import "./Cart.css";
import { useUserData } from "../../context/UserDataContext";
import { Horizontal_card } from "../../Components";
import { price_of_cart } from "../../utils";

export const Cart = () => {
  const { user_data } = useUserData();
  let cart_price = price_of_cart(user_data.cart);
  return (
    <div class="page-container">
      <div class="cart-text flex-center-row pad-1 fnt-1-2 fnt-w-600">
        MY CART
      </div>
      {user_data.cart.length === 0 && (
        <div class="flex-center-row mar-t-1 pad-1 fnt-1-5 fnt-w-600">
          Your Cart is Empty
        </div>
      )}
      <div class="cart flex-center-row gap-1 ali-st">
        {user_data.cart.length > 0 && (
          <div class="cart-items flex-center-column gap-1">
            {user_data.cart.map((item) => (
              <Horizontal_card key={item.id} item={item} />
            ))}
          </div>
        )}
        {user_data.cart.length > 0 && (
          <div class="pad-1 width-30  price-details flex-column mar-t-1 gap-0-8">
            <div class="fnt-1-2 fnt-w-600">Price Details</div>
            <div class="spacer"></div>
            <div class="flex jst-sp-sb">
              <div class="fnt-1-2">Price ({user_data.cart.length} Items)</div>
              <div class="fnt-1-2">{cart_price}</div>
            </div>
            <div class="flex jst-sp-sb">
              <div class="fnt-1-2">Delivery Charges</div>
              <div class="fnt-1-2">Rs. 100</div>
            </div>
            <div class="spacer"></div>
            <div class="flex jst-sp-sb fnt-w-600">
              <div class="fnt-1-2">Total Amount</div>
              <div class="fnt-1-2">Rs. {cart_price + 100}</div>
            </div>
            <div class="spacer"></div>
            <a class="purchase pad-0-5 fnt-1-2 flex-center-row">Place Order</a>
          </div>
        )}
      </div>
    </div>
  );
};
