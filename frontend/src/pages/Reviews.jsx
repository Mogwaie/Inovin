import axios from "axios";
import { Rating } from "primereact/rating";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import wineglass from "../assets/images/wineGlass.png";

export default function Reviews() {
  const navigateTo = useNavigate();

  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [message, setMessage] = useState(" ");
  const [rating, setRating] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { firstName, lastName, email, message, rating };
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/reviews`,
        body
      );
      if (response.status === 201) {
        console.info("yessssssss");
        navigateTo("/workshop");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="reviewsPageDiv">
      <h2 className="reviewsPageH2">Votre avis</h2>
      <p className="reviewsPageP">Qu'avez-vous pensé de l'atelier ?</p>
      <form onSubmit={(e) => handleSubmit(e)} className="reviewsPageDiv">
        <div className="nameDiv">
          <input
            className="reviewsInput nameInput"
            type="text"
            placeholder="Nom *"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            className="reviewsInput"
            type="text"
            placeholder="Prénom *"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <input
          className="longInput"
          type="text"
          placeholder="Email *"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="longInput"
          type="text"
          placeholder="Message *"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="starsDiv card flex justify-content-center">
          <Rating
            className="stars"
            cancel={false}
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <button className="primary-button" id="reviewsPageButton" type="submit">
          Envoyer
        </button>
      </form>
      <img className="wineGlass" src={wineglass} alt="BackgroundImage" />
      <a href="/">
        <p className="reviewsPageP nextTimeP">Une prochaine fois peut-être ?</p>
      </a>
    </div>
  );
}
