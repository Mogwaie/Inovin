import { Link } from "react-router-dom";
import profilePicture from "../../assets/images/profilePicture.png";

function HomeAdmin() {
  return (
    <div className="home-page-admin-container">
      <img className="profileImage" src={profilePicture} alt="Profile" />
      <div className="link-list-home-admin">
        <ul>
          <h2>Partie admin</h2>
          <Link to="/admin/user-list">
            <li>Membres</li>
          </Link>
          <Link to="/admin/wine-list">
            <li>Fiches de Vins</li>
          </Link>
          <Link to="/admin/degustation-profil-list">
            <li>Profils de Dégustation</li>
          </Link>
          <Link to="/admin/degustation">
            <li>Fiche de Dégustation</li>
          </Link>
          <Link to="/admin/workshop">
            <li>Atelier de Création</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
export default HomeAdmin;
