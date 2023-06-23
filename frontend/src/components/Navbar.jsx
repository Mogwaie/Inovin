import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logoInovin from "../assets/images/logo-inovin.svg";
import UserBurgerMenu from "./UserBurgerMenu";
import AdminBurgerMenu from "./AdminBurgerMenu";

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");
  const [showNav, setShowNav] = useState(true);

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
  const urlPageListAdmin = ["/admin"];

  // compare current url with url array
  const isUrlAdmin = urlPageListAdmin.find((urlPage) => urlPage === currentUrl);

  return (
    <div className={`nav-container ${showNav ? "" : "hide-navbar"}`}>
      <Link to="/">
        <img src={logoInovin} alt="logo website inovin" />
      </Link>

      {isUrlAdmin ? (
        <AdminBurgerMenu
          handleShowLinks={handleShowLinks}
          showLinks={showLinks}
        />
      ) : (
        <UserBurgerMenu
          handleShowLinks={handleShowLinks}
          showLinks={showLinks}
          currentUrl={currentUrl}
        />
      )}
    </div>
  );
}
