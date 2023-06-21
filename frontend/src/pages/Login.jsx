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
      </form>
      <div className="links-page-login">
        <div className="buttons-container-login-page">
          <Link to="/tastingSheet">
            <button className="primary-button" type="submit">
              Connexion
            </button>
          </Link>

          <Link to="/signUp">
            <button className="primary-button" type="button">
              Inscription
            </button>
          </Link>
        </div>

        <Link to="/passwordRecovery">
          <p>Mot de passe oublié ?</p>
        </Link>
      </div>
    </div>
  );
}
