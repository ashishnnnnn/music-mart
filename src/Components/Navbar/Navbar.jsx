import "./Navbar.css";
import { Link } from "react-router-dom";
import { useGetLocalData } from "../../Hooks/useGetLocalData";
import { useUserData } from "../../context/UserDataContext";
import { useState } from "react";
import { useProductList } from "../../context/ProductListContext";
import { get_searched_result } from "../../utils";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { useToast } from "../../context/ToastContext";

export const Navbar = () => {
  useGetLocalData();
  const { handleaddtoast } = useToast();
  const { user_data, setUser_Data } = useUserData();
  const [isInputActive, setIsInputActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { product_list } = useProductList();
  const searched_result = get_searched_result(searchValue, product_list);
  const [sideBarActive, setSideBarActive] = useState(false);
  let navigate = useNavigate();
  const { auth_state, setAuthState } = useAuthContext();
  const { token, user } = auth_state;

  return (
    <>
      <div className="navigation-bar z-ind-2">
        <div
          onClick={() => {
            setSideBarActive((prevState) => !prevState);
          }}
          className="hemburgur"
          href="#"
        >
          <i className="fas fa-bars"></i>
        </div>
        {sideBarActive && (
          <div className="side-hidden-bar  z-ind-2">
            <div className="user-info pad-2 flex-align jst-sp-sb">
              <img
                className="avatar avatar-md"
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                alt="avatar-image"
              />
              <div
                onClick={() => {
                  setSideBarActive((prevState) => !prevState);
                }}
                className="cross cursor-pointer"
              >
                <i className="fas fa-times"></i>
              </div>
            </div>
            {token ? (
              <div className="side-hidder-info pad-t-1 pad-l-1">
                <div
                  onClick={() => {
                    handleaddtoast({
                      message: `Bye Bye ${user.firstName}`,
                      type: "alert-success",
                    });
                    localStorage.removeItem("token");
                    localStorage.removeItem("my_wishlist");
                    localStorage.removeItem("my_cart");
                    setUser_Data({ type: "RESET" });

                    setAuthState({ type: "TOKEN", payload: null });
                    setSideBarActive((pre_state) => !pre_state);
                  }}
                  className="btn btn-primary cursor-pointer"
                >
                  LogOut
                </div>
              </div>
            ) : (
              <div className="side-hidder-info pad-t-1 pad-l-1">
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/login");
                    setSideBarActive((pre_state) => !pre_state);
                  }}
                  className="btn btn-primary cursor-pointer"
                >
                  Login
                </div>
              </div>
            )}
          </div>
        )}
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
                  className="fas fa-times cursor-pointer"
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
                          setIsInputActive(false);
                          setSearchValue("");
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
          <Link to={token ? "/wishlist" : "/login"} className="wishlist-btn">
            <div className="badge badge-icon">
              <i className="fas fa-heart"></i>
              {user_data.wishlist.length > 0 && (
                <p>{user_data.wishlist.length}</p>
              )}
            </div>
          </Link>
          <Link to={token ? "/cart" : "/login"} className="cart-btn">
            <div className="badge badge-icon">
              <i className="fas fa-cart-plus"></i>
              {user_data.cart.length > 0 && <p>{user_data.cart.length}</p>}
            </div>
          </Link>
          <li className="login-btn">
            {token ? (
              <div
                onClick={() => {
                  handleaddtoast({
                    message: `Bye Bye ${user.firstName}`,
                    type: "alert-success",
                  });
                  localStorage.removeItem("token");
                  localStorage.removeItem("my_wishlist");
                  localStorage.removeItem("my_cart");
                  setUser_Data({ type: "RESET" });

                  setAuthState({ type: "TOKEN", payload: null });
                }}
                className="btn btn-primary cursor-pointer"
              >
                LogOut
              </div>
            ) : (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/login");
                }}
                className="btn btn-primary cursor-pointer"
              >
                Login
              </div>
            )}
          </li>
        </ul>
      </div>
      <div className="margin-req"></div>
    </>
  );
};
