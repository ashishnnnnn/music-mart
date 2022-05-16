import axios from "axios";

import "./SingleProductDetails.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingAnimation from "react-circle-loading-animation";
import { get_product_from_id } from "../../utils";
import { useUserData } from "../../context/UserDataContext";
import { is_item_in_wishlist, is_item_in_cart } from "../../utils";
import { useToast } from "../../context/ToastContext";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const SingleProductDetails = () => {
  const { product_id } = useParams();
  const [isloading, setisloading] = useState(false);
  const { user_data, setUser_Data } = useUserData();
  const { handleaddtoast } = useToast();
  const product_list = useSelector((state) => state.product_list).product_list;
  let product = get_product_from_id(product_id, product_list);
  const auth_state = useSelector((state) => state.auth);
  const { token } = auth_state;
  useEffect(() => {
    (async () => {
      setisloading(true);
      await (async () => {
        return new Promise((resolve) => setTimeout(resolve, 1000));
      })();
      try {
        setisloading(false);
      } catch (e) {
        setisloading(false);
      }
    })();
  }, []);
  return (
    <div className="single-product-container mar-t-2  pad-2 jst-sp-sb">
      {isloading && <LoadingAnimation isLoading={true} color={"#bb4430"} />}
      {!isloading && (
        <>
          <img className="single-product-image" src={product.src}></img>
          <div className="single-product-remaining flex-column jst-sp-sb">
            <div className="single-product-description">
              <div className="fnt-2 fnt-w-600 mar-b-1">{product.title}</div>
              <div className="fnt-1-5 fnt-w-500 mar-b-1">
                Rs - {product.price}
              </div>
              <div className="rating">
                {Array.from({ length: product.rating }, (v, i) => i).map(
                  (_, index) => (
                    <i key={index} className="fas fa-star theme-color"></i>
                  )
                )}
              </div>
            </div>
            <div className="single-product-btn">
              {is_item_in_wishlist(user_data.wishlist, product) ? (
                <Link
                  to={"/wishlist"}
                  className="single-product-secondary-btn flex-center-row"
                >
                  Go To Wishlist
                </Link>
              ) : (
                <div
                  onClick={(e) => {
                    if (token) {
                      e.stopPropagation();
                      handleaddtoast({
                        message: "Added To Wishlist",
                        type: "alert-success",
                      });
                      setUser_Data({
                        type: "ADD_TO_WISHLIST",
                        paylod: product,
                      });
                    } else {
                      handleaddtoast({
                        message: "Login First To Add to Wishlist",
                        type: "alert-warn",
                      });
                    }
                  }}
                  className="single-product-secondary-btn flex-center-row"
                >
                  Add To Wishlist
                </div>
              )}
              {is_item_in_cart(user_data.cart, product) ? (
                <Link
                  to={"/cart"}
                  className="single-product-primary-btn flex-center-row mar-t-1"
                >
                  Go To Cart
                </Link>
              ) : (
                <div
                  onClick={(e) => {
                    if (token) {
                      e.stopPropagation();
                      handleaddtoast({
                        message: "Added To Cart",
                        type: "alert-success",
                      });
                      setUser_Data({ type: "ADD_TO_CART", paylod: product });
                    } else {
                      handleaddtoast({
                        message: "Login First To Add to Cart",
                        type: "alert-warn",
                      });
                    }
                  }}
                  className="single-product-primary-btn flex-center-row mar-t-1"
                >
                  Add To Cart
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
