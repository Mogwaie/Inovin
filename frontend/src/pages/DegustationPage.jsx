import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import SliderUser from "../components/SliderUser";
import Button from "../components/Button";

function DegustationPage() {
  const navigateTo = useNavigate();

  const [wineListTasting, setWineListTasting] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4242/api/tastes`).then((response) => {
      setWineListTasting(response.data);
    });
  }, []);

  const navigateToDesgustationProfilePage = async () => {
    navigateTo("/workshop");
  };
  return (
    <div className="DegustationPage" id="DegustationPage">
      <h1 className="title-page">Fiche de Dégustation</h1>

      <p className="title-content">Quels sont vos goûts ?</p>

      <div className="taste-slider-main-ctn">
        <div className="taste-slider-ctn">
          {wineListTasting.map((wine) => (
            <div className="taste-slider">
              <SliderUser
                id={wine.taste_id}
                tasteName={wine.name}
                maxRating={10}
              />
            </div>
          ))}
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
