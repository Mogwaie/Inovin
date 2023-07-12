import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import wineglass from "../../assets/images/wineGlass.png";

export default function AtelierCreation() {
  const navigateTo = useNavigate();
  const [cepageOne, setCepageOne] = useState("");
  const [cepageTwo, setCepageTwo] = useState("");
  const [cepageThree, setCepageThree] = useState("");
  const [cepageFour, setCepageFour] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { cepageOne, cepageTwo, cepageThree, cepageFour };
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/cepageList`,
        body
      );
      if (response.status === 204) {
        navigateTo("/admin/home");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="reviewsPageDiv">
      <h2 className="reviewsPageH2">Atelier de création</h2>
      <p className="reviewsPageP">
        Choisissez 4 cépages pour votre prochain atelier.
      </p>
      <form onSubmit={(e) => handleSubmit(e)} className="reviewsPageDiv">
        <input
          className="cepageInput"
          type="text"
          placeholder="Cépage 1"
          value={cepageOne}
          onChange={(e) => setCepageOne(e.target.value)}
        />
        <input
          className="cepageInput"
          type="text"
          placeholder="Cépage 2"
          value={cepageTwo}
          onChange={(e) => setCepageTwo(e.target.value)}
        />
        <input
          className="cepageInput"
          type="text"
          placeholder="Cépage 3"
          value={cepageThree}
          onChange={(e) => setCepageThree(e.target.value)}
        />
        <input
          className="cepageInput"
          type="text"
          placeholder="Cépage 4"
          value={cepageFour}
          onChange={(e) => setCepageFour(e.target.value)}
        />
        <button className="primary-button" id="reviewsPageButton" type="submit">
          Envoyer
        </button>
      </form>
      <img className="wineGlass" src={wineglass} alt="BackgroundImage" />
    </div>
  );
}
