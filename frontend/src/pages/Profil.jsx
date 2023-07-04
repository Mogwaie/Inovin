import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import profileBottles from "../assets/images/profileBottles.png";
import profilePicture from "../assets/images/profilePicture.png";

export default function Profile() {
  const navigateTo = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [adress, setAdress] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [fonction, setFonction] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      firstName,
      lastName,
      email,
      password,
      confirmedPassword,
      adress,
      zip,
      city,
      fonction,
    };
    console.info(body, "test");
    try {
      const response = await axios.post(
        "http://www.localhost:4242/api/user",
        body
      );
      if (response.status === 201) {
        console.info("yessssssss");
      }
    } catch (error) {
      console.error(error);
    }
    navigateTo("/degustation");
  };
  return (
    <div className="profilePageDiv">
      <img className="profileBottles" src={profileBottles} alt="Bottles" />
      <div className="profilePartTwo">
        <img className="profileImage" src={profilePicture} alt="Profile" />
        <h2>Profile</h2>
        <form onSubmit={(e) => handleSubmit(e)} className="profilePageForm">
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
            placeholder="Mot de passe *"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="longInput"
            type="text"
            placeholder="Confirmer mot de passe *"
            value={confirmedPassword}
            onChange={(e) => setConfirmedPassword(e.target.value)}
          />
          <input
            className="longInput"
            type="text"
            placeholder="Adresse *"
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
          />
          <div className="cityDiv">
            <input
              className="reviewsInput nameInput"
              type="text"
              placeholder="Code postal *"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
            <input
              className="reviewsInput"
              type="text"
              placeholder="Ville *"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <input
            className="longInput"
            type="text"
            placeholder="Fonction *"
            value={fonction}
            onChange={(e) => setFonction(e.target.value)}
          />
          <button
            className="primary-button"
            id="reviewsPageButton"
            type="submit"
          >
            Mettre à jour
          </button>
        </form>
      </div>
    </div>
  );
}
