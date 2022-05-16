import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components";
import {
  Home,
  ProductListing,
  Wishlist,
  Cart,
  SingleProductDetails,
  Login,
  Signup,
} from "./pages";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-list" element={<ProductListing />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/single-product/:product_id"
          element={<SingleProductDetails />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
