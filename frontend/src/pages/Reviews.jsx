import { useState } from "react";
import { Rating } from "primereact/rating";
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
      <h2 className="reviewsPageH2">Votre avis</h2>
      <p className="reviewsPageP">Qu'avez-vous pensé de l'atelier ?</p>
      <div className="nameDiv">
        <input
          className="reviewsInput nameInput"
          type="text"
          placeholder="Nom *"
        />
        <input className="reviewsInput" type="text" placeholder="Prénom *" />
      </div>
      <input className="longInput" type="text" placeholder="Email *" />
      <input className="longInput" type="text" placeholder="Message *" />
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
        <p className="reviewsPageP nextTimeP">Une prochaine fois peut-être ?</p>
      </a>
    </div>
  );
}
