import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function UserBurgerMenu({
  handleShowLinks,
  showLinks,
  setShowLinks,
}) {
  // hide or show burger menu
  const [showBurger, setShowBurger] = useState(true);

  const urlPageListHideBurgerMenu = ["/login", "/sign-up", "/degustation"];

  const location = useLocation();

  const logout = () => {
    localStorage.removeItem("token");
    setShowLinks(false);
  };

  useEffect(() => {
    if (urlPageListHideBurgerMenu.find((url) => url === location.pathname)) {
      setShowBurger(false);
    } else {
      setShowBurger(true);
    }
  });

  return (
    <div className="container-burger-menu">
      <div className={`nav-links ${showLinks ? "show-nav" : ""}`}>
        <ul>
          <li>Profil</li>
          <li>Atelier</li>
          <li>Boutique</li>
          <a href="/login">
            <button
              type="submit"
              className="link-deconnection-admin"
              onClick={logout}
            >
              Déconnexion
            </button>
          </a>
        </ul>

        <button
          type="button"
          className={`menu-burger ${showBurger ? "" : "hide-burger-menu"}`}
          onClick={handleShowLinks}
        >
          <div className="burger-bar" />
        </button>
      </div>
    </div>
  );
}

UserBurgerMenu.propTypes = {
  handleShowLinks: PropTypes.func.isRequired,
  showLinks: PropTypes.bool.isRequired,
  setShowLinks: PropTypes.bool.isRequired,
};
