import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import InputForm from "../components/InputForm";
import Button from "../components/Button";

function PasswordResetForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      email,
    };

    try {
      const response = await axios.post(
        "http://localhost:4242/api/users",
        body
      );

      if (response.status === 201) {
        console.info(
          "Données enregistrées avec succès dans la base de données !"
        );
        navigate("/login");
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="container_forgottenpassword">
      <h2 className="title_forgottenpassword">Renseignez votre email</h2>

      <div className="forgottenpassword_input_component">
        <InputForm
          state={email}
          setter={setEmail}
          type="email"
          placeholder="mot de passe*"
        />
      </div>

      <div className="forgottenpassword_input_component_navigate">
        <Button
          type="submit"
          className="primary-button"
          text="Réinitialiser le mot de passe"
        />
        <Link to="/login">
          <p>Retour</p>
        </Link>
      </div>
    </form>
  );
}

export default PasswordResetForm;
