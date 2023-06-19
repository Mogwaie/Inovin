import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./main.scss";
import SignUp from "./components/SignUp";

// import RoutesPath from "./routes/RoutesPath";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SignUp />
    </BrowserRouter>
  </React.StrictMode>
);
