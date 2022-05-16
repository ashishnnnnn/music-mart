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
import { AuthProvider } from "./context/AuthContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ToastProvider>
        <FilterProvider>
          <UserDataProvider>
            <ProductListProvider>
              <Router>
                <App />
              </Router>
            </ProductListProvider>
          </UserDataProvider>
        </FilterProvider>
      </ToastProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
