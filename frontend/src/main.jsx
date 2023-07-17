import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./main.scss";
import { ToastContainer } from "react-toastify";
import Root from "./routes/Root";

import MaxLengthProvider from "./context/MaxLengthContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import DegustationPage from "./pages/DegustationPage";
import Workshop from "./pages/Workshop";
import Reviews from "./pages/Reviews";
import Profil from "./pages/Profil";
import WineSelection from "./pages/WineSelection";
import WineDescription from "./pages/WineDescription";
import DegustationProfile from "./pages/DegustationProfile";
import PasswordResetForm from "./pages/PasswordResetForm";
import ForgottenPassword from "./pages/ForgottenPassword";
import Page404 from "./pages/Page404";
import Page500 from "./pages/Page500";
import LegalNotice from "./pages/LegalNotice";

import HomeAdmin from "./pages/admin/HomeAdmin";
import UserList from "./pages/admin/UserList";
import CreateUser from "./pages/admin/CreateUser";
import WineList from "./pages/admin/WineList";
import WineDescriptionModif from "./pages/admin/WineDescriptionModif";
import DegustationProfil from "./pages/admin/DegustationProfil";
import TastingSheetModif from "./pages/admin/TastingSheetModif";
import AdminDegustationProfile from "./pages/admin/AdminDegustationProfile";
import AtelierCreation from "./pages/admin/AtelierCreation";
import AdminTest from "./pages/Admintest";

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
        path: "/degustation-profile/:id",
        element: <DegustationProfile />,
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
        path: "/password-reset-form",
        element: <PasswordResetForm />,
      },
      {
        path: "/wine-list/:id",
        element: <WineDescriptionModif />,
      },
      {
        path: "/admin/create-user",
        element: <CreateUser />,
      },
      {
        path: "/admin/tasting-sheet",
        element: <TastingSheetModif />,
      },
      {
        path: "/admin/home",
        element: <HomeAdmin />,
      },
      {
        path: "/forgottenpasswordform",
        element: <ForgottenPassword />,
      },
      {
        path: "*",
        element: <Page404 />,
      },
      {
        path: "/page-500",
        element: <Page500 />,
      },
      {
        path: "/test",
        element: <AdminTest />,
      },
      {
        path: "/mentions-legales",
        element: <LegalNotice />,
      },

      {
        path: "/legal-notice",
        element: <LegalNotice />,
      },
      {
        path: "/admin",
        children: [
          {
            index: true,
            element: <Navigate to="/admin/home" replace />,
          },
          {
            path: "home",
            element: <HomeAdmin />,
          },
          {
            path: "user-list",
            element: <UserList />,
          },
          {
            path: "create-user",
            element: <CreateUser />,
          },
          {
            path: "wine-list",
            element: <WineList />,
          },
          {
            path: "wine-list/:id",
            element: <WineDescriptionModif />,
          },
          {
            path: "degustation-profil",
            element: <DegustationProfil />,
          },
          {
            path: "tasting-sheet",
            element: <TastingSheetModif />,
          },
          {
            path: "degustation-profile",
            element: <AdminDegustationProfile />,
          },
          {
            path: "workshop",
            element: <AtelierCreation />,
          },
          {
            path: "degustation-profile/:id",
            element: <AdminDegustationProfile />,
          },
        ],
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
