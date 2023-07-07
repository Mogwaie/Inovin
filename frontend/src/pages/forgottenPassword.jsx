import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import InputEmail from "../components/InputEmail";
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
        "http://localhost:6200/api/users",
        body
      );

      if (response.status === 201) {
        console.info(
          "Données enregistrées avec succès dans la base de données !"
        );
        navigate("/degustation");
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="container_form">
      <h2 className="title_form">Mot de passe oublié</h2>

      <div className="form_input_component">
        <InputEmail value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className="form_navigate">
        <Button
          type="submit"
          className="primary-button"
          text="Réinitialiser le mot de passe"
        />
      </div>
    </form>
  );
}

export default PasswordResetForm;
