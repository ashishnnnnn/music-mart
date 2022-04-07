import "./Navbar.css";
import { Link } from "react-router-dom";
import { useGetLocalData } from "../../Hooks/useGetLocalData";
import { useUserData } from "../../context/UserDataContext";
export const Navbar = () => {
  useGetLocalData();
  const { user_data, setUser_Data } = useUserData();
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
              <a href="" className="search-icon">
                <i className="fa fa-search"></i>
              </a>
              <input className="fnt-1-2 search-input" />
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
