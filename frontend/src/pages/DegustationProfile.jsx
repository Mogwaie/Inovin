import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import Assemblage from "../assets/images/Assemblage.webp";
import ShopCave from "../assets/images/ShopCave.png";
import Button from "../components/Button";

function DegustationProfile() {
  const { id } = useParams();
  const [profilTaste, setProfilTaste] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/profil-taste/${id}`)
      .then((response) => {
        setProfilTaste(response.data);
      });
  }, [id]);

  const navigateTo = useNavigate();

  const buttonDirection = async () => {
    navigateTo("/degustation");
  };

  return (
    <div>
      <div className="degustation-header">
        <h2>Votre profil de dégustation</h2>
        <h2>{profilTaste.name}</h2>

        <p>{profilTaste.description}</p>
      </div>
      <div className="assemblez-vin">
        <h3 className="title-h3">Assemblez votre vin</h3>
        <div>
          <a href="/workshop">
            <img src={Assemblage} alt="empty" />
            <p className="selection-text"> L'Atelier </p>
          </a>
        </div>
      </div>
      <div className="selection-vin">
        <h3 className="title-h3">Nous avons sélectionné pour vous</h3>
        <a href="/wine-selection">
          <img src={ShopCave} alt="empty" />
          <p className="selection-text"> La Cave </p>
        </a>
      </div>
      <h4 className="title-h4">Ce profil ne vous correspond pas ?</h4>
      <div className="button-deg">
        <Button
          text="Retour "
          onClick={buttonDirection}
          id="Degustation-profile-button"
        />
      </div>
    </div>
  );
}

export default DegustationProfile;
