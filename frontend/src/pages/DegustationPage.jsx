import React from "react";

import SliderUser from "../components/SliderUser";
import Button from "../components/Button";

function DegustationPage() {
  const id = 1;
  const urlDegustationProfile = `/degustation-profile/${id}`;
  const handleClick = async () => {
    console.info("test");
  };
  return (
    <div className="DegustationPage" id="DegustationPage">
      <h1 className="title-page">Fiche de Dégustation</h1>

      <p className="title-content">Quels sont vos goûts ?</p>

      <div className="taste-slider-main-ctn">
        <div className="taste-slider-ctn">
          <div className="taste-slider">
            <SliderUser tasteName="Châteauneuf-du-Pape" />
          </div>
          <div className="taste-slider">
            <SliderUser tasteName="Château Margaux" />
          </div>
          <div className="taste-slider">
            <SliderUser tasteName="Beaujolais Nouveau" />
          </div>
          <div className="taste-slider">
            <SliderUser tasteName="Domaine de la Romanée-Conti" />
          </div>
        </div>

        <div className="taste-slider-ctn">
          <div className="taste-slider">
            <SliderUser tasteName="Le Sancerre Blanc" />
          </div>
          <div className="taste-slider">
            <SliderUser tasteName="Pouilly-Fuissé" />
          </div>
          <div className="taste-slider">
            <SliderUser tasteName="Châteauneuf-du-Pape Blanc" />
          </div>
          <div className="taste-slider">
            <SliderUser tasteName="Château Yquem" />
          </div>
        </div>
      </div>

      <div className="btn-navigate">
        <a href={urlDegustationProfile}>
          <Button
            text="Valider"
            onClick={handleClick}
            id="degutation-page-btn"
          />
        </a>
      </div>
    </div>
  );
}

export default DegustationPage;
