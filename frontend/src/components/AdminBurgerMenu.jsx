import PropTypes from "prop-types";
import wineLeaf from "../assets/images/wineLeaf.png";

export default function AdminBurgerMenu({ handleShowLinks, showLinks }) {
  const logout = () => {
    localStorage.removeItem("token");
  };

  return (
    <div className="container-burger-menu">
      <div className={`nav-links ${showLinks ? "show-nav" : ""}`}>
        <ul>
          <a href="/admin/user-list">
            <li>Membres</li>
          </a>
          <a href="/admin/wine-list">
            <li>Fiches de vins</li>
          </a>

          <a href="/admin/degustation-profil-list">
            <li>Profils de dégustation</li>
          </a>

          <a href="/admin/degustation">
            <li>Fiche de dégustation</li>
          </a>

          <a href="/admin/workshop">
            <li>Atelier de création</li>
          </a>

          <a href="/">
            <li className="link-deconnection-admin">
              <button
                type="submit"
                className="link-deconnection-admin"
                onClick={logout}
              >
                Déconnexion
              </button>
            </li>
          </a>
        </ul>
        <button type="button" className="menu-burger" onClick={handleShowLinks}>
          <div className="burger-bar" />
        </button>
        <img className="wineLeaf" src={wineLeaf} alt="wine leaf" />
      </div>
    </div>
  );
}

AdminBurgerMenu.propTypes = {
  handleShowLinks: PropTypes.func.isRequired,
  showLinks: PropTypes.bool.isRequired,
};
