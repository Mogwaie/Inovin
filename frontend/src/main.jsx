import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./main.scss";
import { ToastContainer } from "react-toastify";
import Root from "./routes/Root";

import MaxLengthProvider from "./context/MaxLengthContext";

import Home from "./pages/Home";
import AdminTest from "./pages/Admintest";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import DegustationPage from "./pages/DegustationPage";
import Workshop from "./pages/Workshop";
import Reviews from "./pages/Reviews";
import Profil from "./pages/Profil";
import WineSelection from "./pages/WineSelection";
import WineDescription from "./pages/WineDescription";
import UserList from "./pages/admin/UserList";
import DegustationProfile from "./pages/DegustationProfile";
import WineList from "./pages/admin/WineList";
import DegustationProfil from "./pages/admin/DegustationProfil";
import PasswordResetForm from "./pages/PasswordResetForm";
import ForgottenPassword from "./pages/ForgottenPassword";
import WineDescriptionModif from "./pages/admin/WineDescriptionModif";

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
        path: "/profile",
        element: <Profil />,
      },
      {
        path: "/wine-selection",
        element: <WineSelection />,
      },
      {
        path: "/wine/:id",
        element: <WineDescription />,
      },
      {
        path: "user-list",
        element: <UserList />,
      },
      {
        path: "/degustation-profile",
        element: <DegustationProfile />,
      },
      {
        path: "/wine-list",
        element: <WineList />,
      },
      {
        path: "/degustation-profil",
        element: <DegustationProfil />,
      },
      {
        path: "/passwordresetform",
        element: <PasswordResetForm />,
      },
      {
        path: "/wine-list/:id",
        element: <WineDescriptionModif />,
      },
      {
        path: "/forgottenpasswordform",
        element: <ForgottenPassword />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <MaxLengthProvider>
      <RouterProvider router={router} />
      <ToastContainer closeButton={false} />
    </MaxLengthProvider>
  </React.StrictMode>
);
