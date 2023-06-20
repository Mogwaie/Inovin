import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./main.scss";

import MaxLengthProvider from "./context/MaxLengthContext";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AdminTest from "./pages/Admintest";
import Login from "./pages/Login";
import SignUp from "./components/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/navbar",
    element: <Navbar />,
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
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <MaxLengthProvider>
      <RouterProvider router={router} />
    </MaxLengthProvider>
  </React.StrictMode>
);
