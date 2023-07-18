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
import PrivateRoutes from "./utils/PrivateRoutes";
import userRoles from "./utils/constantRoles";

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
        element: (
          <PrivateRoutes expectedRoles={[userRoles.admin, userRoles.user]}>
            <DegustationPage />
          </PrivateRoutes>
        ),
      },
      {
        path: "/degustation-profile/:id",
        element: (
          <PrivateRoutes expectedRoles={[userRoles.admin, userRoles.user]}>
            <DegustationProfile />
          </PrivateRoutes>
        ),
      },
      {
        path: "/workshop",
        element: (
          <PrivateRoutes expectedRoles={[userRoles.admin, userRoles.user]}>
            <Workshop />
          </PrivateRoutes>
        ),
      },
      {
        path: "/reviews",
        element: (
          <PrivateRoutes expectedRoles={[userRoles.admin, userRoles.user]}>
            <Reviews />
          </PrivateRoutes>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes expectedRoles={[userRoles.admin, userRoles.user]}>
            <Profil />
          </PrivateRoutes>
        ),
      },
      {
        path: "/wine-selection",
        element: (
          <PrivateRoutes expectedRoles={[userRoles.admin, userRoles.user]}>
            <WineSelection />
          </PrivateRoutes>
        ),
      },
      {
        path: "/wine/:id",
        element: (
          <PrivateRoutes expectedRoles={[userRoles.admin, userRoles.user]}>
            <WineDescription />
          </PrivateRoutes>
        ),
      },
      {
        path: "/password-reset-form",
        element: (
          <PrivateRoutes expectedRoles={[userRoles.admin, userRoles.user]}>
            <PasswordResetForm />
          </PrivateRoutes>
        ),
      },
      {
        path: "/wine-list/:id",
        element: (
          <PrivateRoutes expectedRoles={[userRoles.admin, userRoles.user]}>
            <WineDescriptionModif />
          </PrivateRoutes>
        ),
      },
      {
        path: "/forgotten-password-form",
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
        path: "/page-500",
        element: <Page500 />,
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
            element: (
              <PrivateRoutes expectedRoles={[userRoles.admin]}>
                <HomeAdmin />
              </PrivateRoutes>
            ),
          },
          {
            path: "user-list",
            element: (
              <PrivateRoutes expectedRoles={[userRoles.admin]}>
                <UserList />
              </PrivateRoutes>
            ),
          },
          {
            path: "create-user",
            element: (
              <PrivateRoutes expectedRoles={[userRoles.admin]}>
                <CreateUser />
              </PrivateRoutes>
            ),
          },
          {
            path: "wine-list",
            element: (
              <PrivateRoutes expectedRoles={[userRoles.admin]}>
                <WineList />
              </PrivateRoutes>
            ),
          },
          {
            path: "wine-list/:id",
            element: (
              <PrivateRoutes expectedRoles={[userRoles.admin]}>
                <WineDescriptionModif />
              </PrivateRoutes>
            ),
          },
          {
            path: "degustation-profil",
            element: (
              <PrivateRoutes expectedRoles={[userRoles.admin]}>
                <DegustationProfil />
              </PrivateRoutes>
            ),
          },
          {
            path: "tasting-sheet",
            element: (
              <PrivateRoutes expectedRoles={[userRoles.admin]}>
                <TastingSheetModif />
              </PrivateRoutes>
            ),
          },
          {
            path: "degustation-profile",
            element: (
              <PrivateRoutes expectedRoles={[userRoles.admin]}>
                <AdminDegustationProfile />
              </PrivateRoutes>
            ),
          },
          {
            path: "workshop",
            element: (
              <PrivateRoutes expectedRoles={[userRoles.admin]}>
                <AtelierCreation />
              </PrivateRoutes>
            ),
          },
          {
            path: "degustation-profile-admin/:id",
            element: (
              <PrivateRoutes expectedRoles={[userRoles.admin]}>
                <AdminDegustationProfile />
              </PrivateRoutes>
            ),
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
