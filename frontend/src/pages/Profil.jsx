import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import profileBottles from "../assets/images/profileBottles.png";
import profilePicture from "../assets/images/profilePicture.png";

export default function Reviews() {
  const navigateTo = useNavigate();

  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [message, setMessage] = useState(" ");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { firstName, lastName, email, message };
    console.info(body, "test");
    try {
      const response = await axios.post(
        "http://www.localhost:4242/api/reviews",
        body
      );
      if (response.status === 201) {
        console.info("yessssssss");
      }
    } catch (error) {
      console.error(error);
    }
    navigateTo("/workshop");
  };
  return (
    <div className="reviewsPageDiv">
      <img src={profileBottles} alt="Bottles" />
      <img src={profilePicture} alt="Profile" />
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
        <button className="primary-button" id="reviewsPageButton" type="submit">
          Envoyer
        </button>
      </form>
      <a href="/">
        <p className="reviewsPageP nextTimeP">Une prochaine fois peut-être ?</p>
      </a>
    </div>
  );
}
