import React, { useState, useEffect } from "react";
import axios from "axios";

import SliderUser from "../components/SliderUser";
import Button from "../components/Button";

function DegustationPage() {
  const [tasteIdRating, setTasteIdRating] = useState([
    { id: 1, rating: 0 },
    { id: 2, rating: 0 },
    { id: 3, rating: 0 },
    { id: 4, rating: 0 },
  ]);

  const id = 1;
  const urlDegustationProfile = `/degustation-profile/${id}`;

  const [wineListTasting, setWineListTasting] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/tastes`)
      .then((response) => {
        setWineListTasting(response.data);
      });
  }, []);

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
                tasteIdRating={tasteIdRating}
                setTasteIdRating={setTasteIdRating}
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
