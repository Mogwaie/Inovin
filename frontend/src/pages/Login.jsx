import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import InputForm from "../components/InputForm";

export default function Login() {
  const navigate = useNavigate();

  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const handleSubmit = async () => {
    const body = {
      email: emailLogin,
      password: passwordLogin,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/login`,
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
      navigate("/page-500");
    }
  };

  return (
    <div className="login-container-page">
      <h2>Accéder à votre compte</h2>

      <form onSubmit={handleSubmit}>
        <InputForm
          state={emailLogin}
          setter={setEmailLogin}
          type="email"
          placeholder="Email*"
        />
        <InputForm
          state={passwordLogin}
          setter={setPasswordLogin}
          type="password"
          placeholder="Mot de passe*"
        />
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

          <Link to="/sign-up">
            <p>Inscription</p>
          </Link>
        </div>

        <Link to="/forgotten-password-form">
          <p>Mot de passe oublié ?</p>
        </Link>
      </div>
    </div>
  );
}
