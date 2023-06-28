import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./main.scss";

import DegustationProfile from "./pages/DegustationProfile";
import Root from "./routes/Root";
import MaxLengthProvider from "./context/MaxLengthContext";
import Home from "./pages/Home";
import AdminTest from "./pages/Admintest";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import DegustationPage from "./pages/DegustationPage";
import Workshop from "./pages/Workshop";
import Reviews from "./pages/Reviews";
import LegalNotice from "./pages/LegalNotice";

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
        path: "/workshop",
        element: <Workshop />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
      {
        path: "/degustation-profile",
        element: <DegustationProfile />,
      },
      { path: "/legal-notice", element: <LegalNotice /> },
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
