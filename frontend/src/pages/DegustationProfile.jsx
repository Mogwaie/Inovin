import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Assemblage from "../assets/images/Assemblage.webp";
import ShopCave from "../assets/images/ShopCave.png";
import Button from "../components/Button";

function DegustationProfile() {
  const navigateTo = useNavigate();

  const buttonDirection = async () => {
    navigateTo("/degustation");
  };

  const [userProfileTitle, setUserProfileTitle] = useState(
    "Votre profil de dégustation"
  );
  const [userProfileDescription, setUserProfileDescription] = useState(
    " Depuis des siècles, l’Homme cultive la vigne pour produire du vin. Aujourd’hui, on dénombre plus de 10 000 variétés de raisins à travers le monde mais seule une douzaine est parvenue à une reconnaissance générale et indiscutée. Parmi les cépages les plus réputés, on retrouve le Cabernet Sauvignon... "
  );
  const [userAssembleImage, setUserAssembleImage] = useState(Assemblage);
  const [userSelectionImage, setUserSelectionImage] = useState(ShopCave);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios({
          method: "POST",
          url: "http://www.localhost:4242/api/taste-profile",
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.status === 200) {
          const { name, description, assembleImage, selectionImage } =
            response.data;
          setUserProfileTitle(name);
          setUserProfileDescription(description);
          setUserAssembleImage(assembleImage);
          setUserSelectionImage(selectionImage);
        } else {
          console.error("User profile not found");
        }
      } catch (error) {
        console.error("Can not get user data", error);
      }
    };
    fetchUserProfile();
  }, []);

  return (
    <div>
      <div className="degustation-header">
        <h2>Votre Profile</h2>
        <h2>{userProfileTitle}</h2>
        <p>{userProfileDescription}</p>
      </div>
      <div className="assemblez-vin">
        <h3 className="title-h3">Assemblez votre vin</h3>
        <div>
          <a href="/test">
            <img src={userAssembleImage} alt="empty" />
            <p className="selection-text"> L'Atelier </p>
          </a>
        </div>
      </div>
      <div className="selection-vin">
        <h3 className="title-h3">Nous avons sélectionné pour vous</h3>
        <a href="/test">
          <img src={userSelectionImage} alt="empty" />
          <p className="selection-text"> La Cave </p>
        </a>
      </div>
      <h4 className="title-h4">Ce profil ne vous correspond pas ?</h4>
      <div className="button-deg">
        <Button
          text="Revenir sur mes préférences "
          onClick={buttonDirection}
          id="Degustation-profile-button"
        />
      </div>
    </div>
  );
}

export default DegustationProfile;
