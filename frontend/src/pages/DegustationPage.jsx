import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import SliderUser from "../components/SliderUser";
import Button from "../components/Button";
import { DegustationProfilContext } from "../context/DegustationProfilContext";

function DegustationPage() {
  const { tasteIdRating } = useContext(DegustationProfilContext);
  let highestRating = 0;
  const [id, setId] = useState(1);
  const urlDegustationProfile = `/degustation-profile/${id}`;

  const [wineListTasting, setWineListTasting] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/tastes`)
      .then((response) => {
        setWineListTasting(response.data);
      });
  }, []);

  useEffect(() => {
    for (let i = 0; i < tasteIdRating.length; i += 1) {
      if (tasteIdRating[i].rating >= highestRating) {
        highestRating = tasteIdRating[i].rating;
      }
    }
    for (let i = 0; i < tasteIdRating.length; i += 1) {
      if (tasteIdRating[i].rating === highestRating) {
        setId(tasteIdRating[i].id);
      }
    }
  }, [tasteIdRating]);

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
        <a href={urlDegustationProfile}>
          <Button text="Valider" id="degutation-page-btn" />
        </a>
      </div>
    </div>
  );
}

export default DegustationPage;
