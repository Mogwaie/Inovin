import PropTypes from "prop-types";

export default function AdminBurgerMenu({ handleShowLinks, showLinks }) {
  return (
    <div className="container-burger-menu">
      <div className={`nav-links ${showLinks ? "show-nav" : ""}`}>
        <ul>
          <li>Membres</li>
          <li>Vins</li>
          <li>Fiches</li>
          <li>Profil de degustation</li>
          <li className="link-deconnection-admin">Déconnexion</li>
        </ul>
        <button type="button" className="menu-burger" onClick={handleShowLinks}>
          <div className="burger-bar" />
        </button>
      </div>
    </div>
  );
}

AdminBurgerMenu.propTypes = {
  handleShowLinks: PropTypes.func.isRequired,
  showLinks: PropTypes.bool.isRequired,
};
