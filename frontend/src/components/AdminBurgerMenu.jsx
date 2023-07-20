import PropTypes from "prop-types";

export default function AdminBurgerMenu({ handleShowLinks, showLinks }) {
  return (
    <div className="container-burger-menu">
      <div className={`nav-links ${showLinks ? "show-nav" : ""}`}>
        <ul>
          <a href="/admin/workshop">
            <li>Atelier de création</li>
          </a>
          <a href="/admin/user-list">
            <li>Membres</li>
          </a>
          <a href="/admin/degustation-profil-list">
            <li>Profils de dégustation</li>
          </a>
          <a href="/admin/wine-list">
            <li>Fiches de vins</li>
          </a>
          <a href="/admin/degustation">
            <li>Fiches de dégustation</li>
          </a>
          <a href="/login">
            <li className="link-deconnection-admin">Déconnexion</li>
          </a>
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
