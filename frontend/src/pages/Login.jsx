import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import InputPassword from "../components/InputPassword";
import InputEmail from "../components/InputEmail";

export default function Login() {
  const navigate = useNavigate();

  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const handleSubmit = async () => {
    const body = {
      email: emailLogin,
      password: passwordLogin,
    };

    console.info(body);

    try {
      const response = await axios.post(
        `http://localhost:4242/api/login`,
        body
      );
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        console.info(
          "Données vérifiées avec succès ! User checked successfully."
        );
        navigate("/degustation");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="login-container-page">
      <h2>Accéder à notre compte</h2>

      <form onSubmit={handleSubmit}>
        <InputEmail setter={setEmailLogin} />
        <InputPassword setter={setPasswordLogin} />
      </form>
      <div className="links-page-login">
        <div className="buttons-container-login-page">
          <button
            className="primary-button"
            type="submit"
            onClick={() => handleSubmit()}
          >
            Connexion
          </button>

          <Link to="/signUp">
            <p>Inscription</p>
          </Link>
        </div>

        <Link to="/passwordRecovery">
          <p>Mot de passe oublié ?</p>
        </Link>
      </div>
    </div>
  );
}
