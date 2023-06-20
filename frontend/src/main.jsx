import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./main.scss";
// import MaxLengthContext from "./context/MaxLengthContext";
// import UserProvider from "./context/UserContext";
import MaxLengthProvider from "./context/MaxLengthContext";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Navbar from "./components/Navbar";
import AdminTest from "./pages/Admintest";
import Login from "./pages/Login";
import SignUp from "./components/SignUp";

// const MaxLenght = 5;
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/test",
    element: <Test />,
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
