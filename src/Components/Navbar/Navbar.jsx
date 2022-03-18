import "./Navbar.css";
export const Navbar = () => {
  return (
    <>
      <div className="navigation-bar z-ind-2">
        <a href="" className="nav-title">
          <div className="logo flex-center-column">
            <span className="fnt-2 fnt-w-600 theme-color">Music</span>
            <span className="fnt-0-8 fnt-w-900">Mart</span>
          </div>
        </a>
        <ul>
          <li>
            <div className="flex-align search-bar pad-1">
              <a href="" className="search-icon">
                <i className="fa fa-search"></i>
              </a>
              <input className="fnt-1-2 search-input" />
            </div>
          </li>
          <li className="wishlist-btn">
            <div className="badge badge-icon">
              <i className="fas fa-heart"></i>
              <p>5</p>
            </div>
          </li>
          <li className="cart-btn">
            <div className="badge badge-icon">
              <i className="fas fa-cart-plus"></i>
              <p>2</p>
            </div>
          </li>
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
