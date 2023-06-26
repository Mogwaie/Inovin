import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function UserBurgerMenu({ handleShowLinks, showLinks }) {
  // hide or show burger menu
  const [showBurger, setShowBurger] = useState(true);

  const urlPageListHideBurgerMenu = ["/login", "/sign-up", "/degustation"];

  const location = useLocation();

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
          <li className="link-deconnection-admin">Déconnexion</li>
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
};
