import React, { useState, useRef } from "react";
import axios from "axios";
import Assemblage from "../../assets/images/Assemblage.webp";
import ShopCave from "../../assets/images/ShopCave.png";
import SetPen from "../../assets/images/setpen.svg";

function DegustationProfile() {
  const [profileTitle, setProfileTitle] = useState(
    "-- Titre de Votre profil de dégustation --"
  );
  const [profileDescription, setProfileDescription] = useState(
    "-- texte de description --"
  );
  const [assembleImage, setAssembleImage] = useState(Assemblage);
  const [selectionImage, setSelectionImage] = useState(ShopCave);

  const handleImageUpload = (file, setImage) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (event, setImage) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleImageUpload(file, setImage);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const assembleImageRef = useRef(null);
  const selectionImageRef = useRef(null);

  const handleDropOnAssembleImage = (event) => {
    handleDrop(event, setAssembleImage);
  };

  const handleDropOnSelectionImage = (event) => {
    handleDrop(event, setSelectionImage);
  };

  const handleAssembleImageChange = (event) => {
    const file = event.target.files[0];
    handleImageUpload(file, setAssembleImage);
  };

  const handleSelectionImageChange = (event) => {
    const file = event.target.files[0];
    handleImageUpload(file, setSelectionImage);
  };

  const saveChanges = () => {
    const degustationProfileData = {
      profileTitle,
      profileDescription,
      assembleImage,
      selectionImage,
    };

    axios
      .put(
        "http://www.localhost:4242/api/taste-profile",
        degustationProfileData
      )
      .then(() => {
        console.error("Profil enregistré avec succès !");
      })
      .catch((error) => {
        console.error("Erreur lors de l'enregistrement du profil :", error);
      });
  };

  const cancelChanges = () => {
    setProfileTitle("-- Titre de Votre profil de dégustation --");
    setProfileDescription("-- texte de déscription --");
    setAssembleImage(Assemblage);
    setSelectionImage(ShopCave);
  };

  return (
    <div>
      <div className="profile-degustation-ctn">
        <div className="degustation-header-admin">
          <div className="degustation-title-admin">
            <textarea
              name="Title"
              value={profileTitle}
              onChange={(e) => setProfileTitle(e.target.value)}
            />
            <img src={SetPen} alt="empty" />
          </div>
          <div className="degustation-texte-admin">
            <textarea
              name="Text"
              value={profileDescription}
              onChange={(e) => setProfileDescription(e.target.value)}
            />
            <img src={SetPen} alt="empty" />
          </div>
        </div>
        <div className="assemble-select-img-ctn">
          <div className="assemblez-vin-admin">
            <h3 className="title-h3-admin">Assemblez votre vin</h3>
            <div>
              <div
                className="assemblage-img-ctn"
                onDrop={handleDropOnAssembleImage}
                onDragOver={handleDragOver}
              >
                <img src={assembleImage} alt="empty" ref={assembleImageRef} />
                <p className="selection-text-admin">L'Atelier</p>
                <input
                  className="inputfile"
                  type="file"
                  name="assemble-file"
                  id="assemble-file"
                  onChange={handleAssembleImageChange}
                />
                <label htmlFor="assemble-file">Choisissez un fichier…</label>
              </div>
            </div>
          </div>
          <div className="selection-vin-admin">
            <h3 className="title-h3-admin">Nous avons sélectionné pour vous</h3>
            <div
              className="selection-img-ctn"
              onDrop={handleDropOnSelectionImage}
              onDragOver={handleDragOver}
            >
              <img src={selectionImage} alt="empty" ref={selectionImageRef} />
              <p className="selection-text-admin">La Cave</p>
              <input
                className="inputfile"
                type="file"
                name="selection-file"
                id="selection-file"
                onChange={handleSelectionImageChange}
              />
              <label htmlFor="selection-file">Choisissez un fichier…</label>
            </div>
          </div>
        </div>
        <div className="admin-controls-btn">
          <button
            className="primary-button"
            onClick={saveChanges}
            type="button"
          >
            Enregistrer
          </button>
          <button
            className="primary-button"
            onClick={cancelChanges}
            type="button"
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
}

export default DegustationProfile;
