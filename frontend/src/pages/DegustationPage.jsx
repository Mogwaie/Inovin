import React from "react";
import { useNavigate } from "react-router-dom";

import SliderUser from "../components/SliderUser";
import Button from "../components/Button";

function DegustationPage() {
  const navigateTo = useNavigate();

  const navigateToDesgustationProfilePage = async () => {
    navigateTo("/test");
  };
  return (
    <div className="DegustationPage">
      <h1 className="title-page">Fiche de Dégustation</h1>

      <p className="title-content">Quels sont vos goûts ?</p>

      <div className="taste-slider-main-ctn">
        <div className="taste-slider-ctn">
          <div className="taste-slider">
            <SliderUser tasteName="Fruits Rouge" />
          </div>
          <div className="taste-slider">
            <SliderUser tasteName="Pêche" />
          </div>
          <div className="taste-slider">
            <SliderUser tasteName="Thé" />
          </div>
          <div className="taste-slider">
            <SliderUser tasteName="Café" />
          </div>
        </div>

        <div className="taste-slider-ctn">
          <div className="taste-slider">
            <SliderUser tasteName="Amertume" />
          </div>
          <div className="taste-slider">
            <SliderUser tasteName="Sucre" />
          </div>
          <div className="taste-slider">
            <SliderUser tasteName="Miel" />
          </div>
          <div className="taste-slider">
            <SliderUser tasteName="Terre" />
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
