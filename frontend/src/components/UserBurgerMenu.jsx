import PropTypes from "prop-types";

export default function UserBurgerMenu({
  handleShowLinks,
  showLinks,
  currentUrl,
}) {
  // hide or show burger menu
  const urlPageListHideBurgerMenu = ["/", "/login", "/degustation-profile"];

  const hideBurgerMenu = urlPageListHideBurgerMenu.find(
    (urlPage) => urlPage === currentUrl
  );

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
          className={`menu-burger ${hideBurgerMenu ? "hide-burger-menu" : ""}`}
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
  currentUrl: PropTypes.string.isRequired,
};
