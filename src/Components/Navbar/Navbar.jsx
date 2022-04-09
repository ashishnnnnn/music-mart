import "./Navbar.css";
import { Link } from "react-router-dom";
import { useGetLocalData } from "../../Hooks/useGetLocalData";
import { useUserData } from "../../context/UserDataContext";
import { useState } from "react";
import { useProductList } from "../../context/ProductListContext";
import { get_searched_result } from "../../utils";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  useGetLocalData();
  const { user_data } = useUserData();
  const [isInputActive, setIsInputActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { product_list } = useProductList();
  const searched_result = get_searched_result(searchValue, product_list);
  let navigate = useNavigate();
  return (
    <>
      <div className="navigation-bar z-ind-2">
        <Link to="/" href="" className="nav-title">
          <div className="logo flex-center-column">
            <span className="fnt-2 fnt-w-600 theme-color">Music</span>
            <span className="fnt-0-8 fnt-w-900">Mart</span>
          </div>
        </Link>
        <ul>
          <li>
            <div className="flex-align search-bar pad-1">
              <i className="fa fa-search mar-r-1"></i>
              <input
                onChange={(e) => {
                  if (e.target.value.length > 0) {
                    setIsInputActive(true);
                  } else {
                    setIsInputActive(false);
                  }
                  setSearchValue(e.target.value);
                }}
                className="fnt-1-2 search-input mar-r-1"
                value={searchValue}
              />
              {isInputActive && (
                <i
                  onClick={() => {
                    setSearchValue("");
                    setIsInputActive(false);
                  }}
                  class="fas fa-times cursor-pointer"
                ></i>
              )}
              {isInputActive && (
                <div className="search-result flex-column gap-1-5">
                  {searched_result.length === 0 ? (
                    <div className="search-result-individual pad-1 flex-center-row">
                      <p>Oops there is no such element</p>
                    </div>
                  ) : (
                    searched_result.map((ele) => (
                      <div
                        className="search-result-individual pad-1 flex-center-row"
                        key={ele._id}
                        onClick={() => {
                          navigate(`/single-product/${ele._id}`);
                        }}
                      >
                        <p>{ele.title}</p>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          </li>
          <Link to="/wishlist" className="wishlist-btn">
            <div className="badge badge-icon">
              <i className="fas fa-heart"></i>
              {user_data.wishlist.length > 0 && (
                <p>{user_data.wishlist.length}</p>
              )}
            </div>
          </Link>
          <Link to="/cart" className="cart-btn">
            <div className="badge badge-icon">
              <i className="fas fa-cart-plus"></i>
              {user_data.cart.length > 0 && <p>{user_data.cart.length}</p>}
            </div>
          </Link>
          <li className="login-btn">
            <a href="" className="btn btn-primary">
              Login
            </a>
          </li>
        </ul>
      </div>
      <div className="margin-req"></div>
    </>
  );
};
