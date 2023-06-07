import { useState } from "react";
import logoInovin from "../assets/images/logo-inovin.svg";

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="nav-container">
      <img src={logoInovin} alt="logo website inovin" />
      <div className={`nav-links ${showLinks ? "show-nav" : ""}`}>
        <ul>
          <li>Profil</li>
          <li>Atelier</li>
          <li>Boutique</li>
        </ul>
        <button type="button" className="menu-burger" onClick={handleShowLinks}>
          <div className="burger-bar" />
        </button>
      </div>
    </div>
  );
}
