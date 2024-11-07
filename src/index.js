import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import StoreApp from "./redux/Store";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={StoreApp}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
