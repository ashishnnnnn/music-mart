import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { FilterProvider } from "./context/FilterContext";
import { ProductListProvider } from "./context/ProductListContext";

import { UserDataProvider } from "./context/UserDataContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <FilterProvider>
      <UserDataProvider>
        <ProductListProvider>
          <Router>
            <App />
          </Router>
        </ProductListProvider>
      </UserDataProvider>
    </FilterProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
