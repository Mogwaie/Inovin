import { Link } from "react-router-dom";
import profilePicture from "../../assets/images/profilePicture.png";

function HomeAdmin() {
  return (
    <div className="home-page-admin-container">
      <img className="profileImage" src={profilePicture} alt="Profile" />
      <div className="link-list-home-admin">
        <ul>
          <Link to="/admin/user-list">
            <li>Member</li>
          </Link>
          <Link to="/admin/degustation-profil">
            <li>Profil de Dégustation</li>
          </Link>
          <Link to="/admin/wine-list">
            <li>Fiches de Vins</li>
          </Link>
        </ul>
      </div>
      <Link to="/login">
        <p className="link-deconnection-admin">Déconnexion</p>
      </Link>
    </div>
  );
}
export default HomeAdmin;
