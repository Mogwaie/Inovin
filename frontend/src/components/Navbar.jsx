import { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import logoInovin from "../assets/images/logo_inovin_removebg.png";
import UserBurgerMenu from "./UserBurgerMenu";
import AdminBurgerMenu from "./AdminBurgerMenu";

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");
  const [showNav, setShowNav] = useState(true);

  const { id } = useParams();
  const location = useLocation();

  const hideNavbarList = ["/"];

  useEffect(() => {
    if (
      hideNavbarList.find(
        (urlHideNavbar) => urlHideNavbar === location.pathname
      )
    ) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  }, [location]);

  // current url
  useEffect(() => {
    setCurrentUrl(window.location.pathname);
  }, []);

  // links burger menu
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  // url Admin
  const urlPageListAdmin = [
    "/admin/home",
    "/admin/user-list",
    `/admin/user-list/${id}`,
    "/admin/create-user",
    "/admin/wine-list",
    `/admin/wine-list/${id}`,
    "/admin/degustation-profil-list",
    `/admin/degustation-profile-admin/${id}`,
    "/admin/degustation",
    "/admin/workshop",
  ];

  // compare current url with url array
  const isUrlAdmin = urlPageListAdmin.find((urlPage) => urlPage === currentUrl);

  return (
    <div className={`nav-container ${showNav ? "" : "hide-navbar"}`}>
      {isUrlAdmin ? (
        <Link to="/admin">
          <img src={logoInovin} alt="logo website inovin" />
        </Link>
      ) : (
        <Link to="/">
          <img src={logoInovin} alt="logo website inovin" />
        </Link>
      )}

      {isUrlAdmin ? (
        <AdminBurgerMenu
          handleShowLinks={handleShowLinks}
          showLinks={showLinks}
        />
      ) : (
        <UserBurgerMenu
          handleShowLinks={handleShowLinks}
          showLinks={showLinks}
          setShowLinks={setShowLinks}
          currentUrl={currentUrl}
        />
      )}
    </div>
  );
}
