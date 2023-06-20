import { Link } from "react-router-dom";
import InputPassword from "../components/InputPassword";
import InputEmail from "../components/InputEmail";

export default function Login() {
  return (
    <div className="login-container-page">
      <h2>Accéder à notre compte</h2>

      <form>
        <InputEmail />
        <InputPassword />
        <Link to="/change to next page">
          <button className="primary-button" type="submit">
            Connexion
          </button>
        </Link>
      </form>

      <Link to="/signUp">
        <button className="primary-button" type="button">
          Inscription
        </button>
      </Link>
      <Link to="/passwordRecovery">
        <p>Mot de passe oublié ?</p>
      </Link>
    </div>
  );
}
