import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { FilterProvider } from "./context/FilterContext";
import { ProductListProvider } from "./context/ProductListContext";
import { ToastProvider } from "./context/ToastContext";
import { UserDataProvider } from "./context/UserDataContext";
import { Provider } from "react-redux";

import { store } from "./store";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ToastProvider>
      <FilterProvider>
        <UserDataProvider>
          <ProductListProvider>
            <Provider store={store}>
              <Router>
                <App />
              </Router>
            </Provider>
          </ProductListProvider>
        </UserDataProvider>
      </FilterProvider>
    </ToastProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
