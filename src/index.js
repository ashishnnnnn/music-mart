import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { FilterProvider } from "./context/FilterContext";
import { ProductListProvider } from "./context/ProductListContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <FilterProvider>
      <ProductListProvider>
        <Router>
          <App />
        </Router>
      </ProductListProvider>
    </FilterProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
