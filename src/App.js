import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components";
import { Home, ProductListing, Wishlist } from "./pages";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-list" element={<ProductListing />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
