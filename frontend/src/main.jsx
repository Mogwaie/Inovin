import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./main.scss";

import Root from "./routes/Root";
import MaxLengthProvider from "./context/MaxLengthContext";
import Home from "./pages/Home";
import AdminTest from "./pages/Admintest";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import DegustationPage from "./pages/DegustationPage";
import Reviews from "./pages/Reviews";

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
        path: "/admin",
        element: <AdminTest />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/degustation",
        element: <DegustationPage />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
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
