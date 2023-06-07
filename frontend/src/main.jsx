import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import RoutesPath from "./routes/RoutesPath";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutesPath />
    </BrowserRouter>
  </React.StrictMode>
);
