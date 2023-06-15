import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./main.scss";

import RoutesPath from "./routes/RoutesPath";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutesPath />
    </BrowserRouter>
  </React.StrictMode>
);
