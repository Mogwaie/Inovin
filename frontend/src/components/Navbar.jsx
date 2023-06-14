import { useEffect, useState } from "react";
import logoInovin from "../assets/images/logo-inovin.svg";
import UserBurgerMenu from "./UserBurgerMenu";
import AdminBurgerMenu from "./AdminBurgerMenu";

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

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

  const isUrlAdmin = urlPageListAdmin.find((urlPage) => urlPage === currentUrl);

  return (
    <div className="nav-container">
      <img src={logoInovin} alt="logo website inovin" />
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
