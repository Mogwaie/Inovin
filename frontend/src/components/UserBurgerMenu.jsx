import { useEffect, useState } from "react";

export default function UserBurgerMenu() {
  const [showLinks, setShowLinks] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  // hide or show burger menu
  const urlPageListHideBurgerMenu = ["/"];
  useEffect(() => {
    setCurrentUrl(window.location.pathname);
  }, []);

  const hideBurgerMenu = urlPageListHideBurgerMenu.find(
    (urlPage) => urlPage === currentUrl
  );

  // links burger menu
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="container-burger-menu">
      <div className={`nav-links ${showLinks ? "show-nav" : ""}`}>
        <ul>
          <li>Profil</li>
          <li>Atelier</li>
          <li>Boutique</li>
        </ul>
        <button
          type="button"
          className={`menu-burger ${hideBurgerMenu ? "hide-burger-menu" : ""}`}
          onClick={handleShowLinks}
        >
          <div className="burger-bar" />
        </button>
      </div>
    </div>
  );
}
