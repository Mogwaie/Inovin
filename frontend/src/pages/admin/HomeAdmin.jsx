import { Link } from "react-router-dom";
import profilePicture from "../../assets/images/profilePicture.png";

function HomeAdmin() {
  return (
    <div className="home-page-admin-container">
      <img className="profileImage" src={profilePicture} alt="Profile" />
      <div className="link-list-home-admin">
        <ul>
          <Link to="/admin/workshop">
            <li>Atelier de Création</li>
          </Link>
          <Link to="/admin/user-list">
            <li>Membres</li>
          </Link>
          <Link to="/admin/degustation-profil">
            <li>Profils de Dégustation</li>
          </Link>
          <Link to="/admin/wine-list">
            <li>Fiches de Vins</li>
          </Link>
        </ul>
      </div>
      <a href="/login">
        <p className="link-deconnection-admin">Déconnexion</p>
      </a>
    </div>
  );
}
export default HomeAdmin;
