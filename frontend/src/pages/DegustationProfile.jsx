import React from "react";
import { useNavigate } from "react-router-dom";
import Assemblage from "../assets/images/Assemblage.webp";
import ShopCave from "../assets/images/ShopCave.png";
import Button from "../components/Button";

function DegustationProfile() {
  const navigateTo = useNavigate();

  const maFunction = async () => {
    navigateTo("/test");
  };

  return (
    <div>
      <div className="degustation-header">
        <h2>Votre profil de dégustation</h2>

        <p>
          Depuis des siècles, l’Homme cultive la vigne pour produire du vin.
          Aujourd’hui, on dénombre plus de 10 000 variétés de raisins à travers
          le monde mais seule une douzaine est parvenue à une reconnaissance
          générale et indiscutée. Parmi les cépages les plus réputés, on
          retrouve le Cabernet Sauvignon..
        </p>
      </div>
      <div className="assemblez-vin">
        <h3v className="title-h3">Assemblez votre vin</h3v>
        <img src={Assemblage} alt="empty" />
      </div>
      <div className="selection-vin">
        <h3 className="title-h3">Nous avons sélectionné pour vous</h3>
        <img src={ShopCave} alt="empty" />
      </div>
      <h4 className="title-h4">Ce profil ne vous correspond pas ?</h4>
      <div className="button-deg">
        <Button
          text="Revenir sur mes préférences "
          onClick={maFunction}
          id="Degustation-profile-button"
        />
      </div>
    </div>
  );
}

export default DegustationProfile;
