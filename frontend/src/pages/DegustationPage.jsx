import React from "react";
import { useNavigate } from "react-router-dom";

import SliderUser from "../components/SliderUser";
import Button from "../components/Button";

function DegustationPage() {
  const navigateTo = useNavigate();

  const navigateToDesgustationProfilePage = async () => {
    navigateTo("/workshop");
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
        <Button
          text="Terminer"
          onClick={navigateToDesgustationProfilePage}
          id="degutation-page-btn"
        />
      </div>
    </div>
  );
}

export default DegustationPage;
