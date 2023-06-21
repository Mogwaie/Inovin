import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./main.scss";

import Root from "./routes/Root";
import MaxLengthProvider from "./context/MaxLengthContext";
import Home from "./pages/Home";
import AdminTest from "./pages/Admintest";
import Login from "./pages/Login";
import Workshop from "./pages/Workshop";
import SignUp from "./components/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/adnim",
        element: <AdminTest />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/workshop",
        element: <Workshop />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <MaxLengthProvider>
      <RouterProvider router={router} />
    </MaxLengthProvider>
  </React.StrictMode>
);
