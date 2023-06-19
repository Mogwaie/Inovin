import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import "../main.scss";

function Home() {
  const navigateTo = useNavigate();

  const maFunction = async () => {
    navigateTo("/test");
  };

  return (
    <div>
      <h1>Page d'accueil</h1>

      <Button text="Cliquez-moi" onClick={maFunction} id="home-button" />
    </div>
  );
}

export default Home;
