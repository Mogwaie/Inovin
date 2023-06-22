import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";

function Workshop() {
  const navigateTo = useNavigate();
  const goToReview = async () => {
    await navigateTo("/reviews");
  };

  const [dosage1, setDosage1] = useState(0);
  const [dosage2, setDosage2] = useState(0);
  const [dosage3, setDosage3] = useState(0);
  const [dosage4, setDosage4] = useState(0);
  const [dosage5, setDosage5] = useState(0);

  const handleChangeDosage1 = (e) => {
    e.preventDefault();
    setDosage1(e.target.value);
  };

  const handleChangeDosage2 = (e) => {
    e.preventDefault();
    setDosage2(e.target.value);
  };

  const handleChangeDosage3 = (e) => {
    e.preventDefault();
    setDosage3(e.target.value);
  };

  const handleChangeDosage4 = (e) => {
    e.preventDefault();
    setDosage4(e.target.value);
  };

  const handleChangeDosage5 = (e) => {
    e.preventDefault();
    setDosage5(e.target.value);
  };

  return (
    <div className="Workshop">
      <h1 className="title-page">Atelier</h1>
      <h1 className="title-page">de création</h1>

      <div className="cepage-dosage-ctn">
        <div className="cepage-ctn">
          <div className="title-cepage-ctn">Cépages :</div>
          <div className="cepage-name-ctn">
            <div className="cepage-name">Grenache</div>
            <div className="cepage-name">Syrah</div>
            <div className="cepage-name">Merlot</div>
            <div className="cepage-name">Malbec</div>
            <div className="cepage-name">Cabernet Sauvignon</div>
          </div>
        </div>

        <div className="dosage-ctn">
          <div className="title-dosage-ctn">Dosage :</div>
          <div className="dosage-input-ctn">
            <div className="dosage-input">
              <input
                className="input-dosage"
                type="number"
                value={dosage1}
                onChange={handleChangeDosage1}
                placeholder="0"
              />
              <div className="dosage-unite">ml</div>
            </div>
            <div className="dosage-input">
              <input
                className="input-dosage"
                type="number"
                value={dosage2}
                onChange={handleChangeDosage2}
                placeholder="0"
              />
              <div className="dosage-unite">ml</div>
            </div>
            <div className="dosage-input">
              <input
                className="input-dosage"
                type="number"
                value={dosage3}
                onChange={handleChangeDosage3}
                placeholder="0"
              />
              <div className="dosage-unite">ml</div>
            </div>
            <div className="dosage-input">
              <input
                className="input-dosage"
                type="number"
                value={dosage4}
                onChange={handleChangeDosage4}
                placeholder="0"
              />
              <div className="dosage-unite">ml</div>
            </div>
            <div className="dosage-input">
              <input
                className="input-dosage"
                type="number"
                value={dosage5}
                onChange={handleChangeDosage5}
                placeholder="0"
              />
              <div className="dosage-unite">ml</div>
            </div>
          </div>
        </div>
      </div>

      <div className="title-guide-ctn">Guide :</div>
      <div className="guide-ctn">
        <div className="img-guide-ctn">
          <img
            src="https://miro.medium.com/v2/resize:fit:820/0*oyD7ekV-hMU91h4J.png"
            alt="img-guide"
            className="img-guide"
          />
          <img
            src="https://miro.medium.com/v2/resize:fit:820/0*oyD7ekV-hMU91h4J.png"
            alt="img-guide"
            className="img-guide"
          />
          <img
            src="https://miro.medium.com/v2/resize:fit:820/0*oyD7ekV-hMU91h4J.png"
            alt="img-guide"
            className="img-guide"
          />
        </div>
        <div className="content-guide-ctn">
          <ul>
            <li>
              Et consequat anim officia fugiat dolor aute excepteur deserunt
              sint aute anim aliqua est.
            </li>
            <li>
              Et consequat anim officia fugiat dolor aute excepteur deserunt
              sint aute anim aliqua est.
            </li>

            <li>
              Et consequat anim officia fugiat dolor aute excepteur deserunt
              sint aute anim aliqua est.
            </li>
          </ul>
        </div>
      </div>

      <div className="btn-workshop">
        <Button id="btn-to-go-review" text="Enregistrer" onClick={goToReview} />
      </div>
    </div>
  );
}

export default Workshop;
