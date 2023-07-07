import axios from "axios";
import { Rating } from "primereact/rating";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import wineglass from "../assets/images/wineGlass.png";

export default function Reviews() {
  const navigateTo = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const fetchUserInformation = async () => {
      try {
        const reponse = await axios.get(
          "http://www.localhost:4242/api/userinformation"
        );
        console.info("User Information :", reponse.data);
      } catch (error) {
        console.error("Can not get user data");
      }
    };
    fetchUserInformation();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { firstName, lastName, email, message, rating };
    try {
      const response = await axios.post(
        "http://www.localhost:4242/api/reviews",
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
        <Link to="/wine-selection">
          <button
            className="primary-button"
            id="reviewsPageButton"
            type="submit"
          >
            Envoyer
          </button>
        </Link>
      </form>
      <img className="wineGlass" src={wineglass} alt="BackgroundImage" />
      <a href="/">
        <p className="reviewsPageP nextTimeP">Une prochaine fois peut-être ?</p>
      </a>
    </div>
  );
}
