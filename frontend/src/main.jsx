import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
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
