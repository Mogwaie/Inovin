import { Link } from "react-router-dom";
import profilePicture from "../../assets/images/profilePicture.png";

function HomeAdmin() {
  return (
    <div className="home-page-admin-container">
      <img className="profileImage" src={profilePicture} alt="Profile" />
      <div className="link-list-home-admin">
        <ul>
          <Link to="/admin/workshop">
            <li>Atelier Creation</li>
          </Link>
          <Link to="/user-list">
            <li>Member</li>
          </Link>
          <Link to="/degustation-profil">
            <li>Profil de Dégustation</li>
          </Link>
          <Link to="/wine-list">
            <li>Fiches de Vins</li>
          </Link>
        </ul>
      </div>
      <p className="link-deconnection-admin">Déconnexion</p>
    </div>
  );
}
export default HomeAdmin;
