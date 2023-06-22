/* eslint-disable prettier/prettier */
// eslint-disable-next-line import/no-unresolved
import { Rating } from "primereact/Rating";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import wineglass from "../assets/images/wineGlass.png";

export default function Reviews() {
  const [value, setValue] = useState(null);
  const navigateTo = useNavigate();
  const goToSelection = async () => {
    await navigateTo("/test");
  };
  return (
    <div className="reviewsPageDiv">
      <h1 className="reviewsPageH1">Votre avis</h1>
      <p className="reviewsPageP">Qu'avez-vous pensé de l'atelier ?</p>
      <div className="nameDiv">
        <input
          className="reviewsInput nameInput"
          type="text"
          placeholder="Nom *"
        />
        <input className="reviewsInput" type="text" placeholder="Prénom *" />
      </div>
      <input
        className="reviewsInput longInput"
        type="text"
        placeholder="Email *"
      />
      <input
        className="reviewsInput longInput"
        type="text"
        placeholder="Message *"
      />
      <div className=" starsDiv card flex justify-content-center">
        <Rating
          className="stars"
          value={value}
          onChange={(e) => setValue(e.value)}
          cancel={false}
        />
      </div>
      <Button id="reviewsPageButton" text="Envoyer" onClick={goToSelection} />
      <img className="wineGlass" src={wineglass} alt="BackgroundImage" />
      <a href="/">
        <p className="reviewsPageP">Une prochaine fois peut-être ?</p>
      </a>
    </div>
  );
}
