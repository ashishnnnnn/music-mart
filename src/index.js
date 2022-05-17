import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastProvider } from "./context/ToastContext";
import { Provider } from "react-redux";

import { store } from "./store";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ToastProvider>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </ToastProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
