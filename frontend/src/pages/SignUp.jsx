import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { MaxLengthContext } from "../context/MaxLengthContext";
import InputPassword from "../components/InputPassword";
import InputEmail from "../components/InputEmail";
import Button from "../components/Button";

function Signup() {
  const navigate = useNavigate();
  const { maxl } = useContext(MaxLengthContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [job, setJob] = useState("");
  const handleChangeFirstName = (event) => {
    if (event.target.value.length <= maxl) {
      setFirstName(event.target.value);
    }
  };
  const handleChangeLastName = (event) => {
    if (event.target.value.length <= maxl) {
      setLastName(event.target.value);
    }
  };

  const handleChangeAddress = (event) => {
    if (event.target.value.length <= maxl) {
      setAddress(event.target.value);
    }
  };
  const handleChangePostalCode = (event) => {
    if (event.target.value.length <= maxl) {
      setPostalCode(event.target.value);
    }
  };
  const handleChangeCity = (event) => {
    if (event.target.value.length <= maxl) {
      setCity(event.target.value);
    }
  };
  const handleChangeJob = (event) => {
    if (event.target.value.length <= maxl) {
      setJob(event.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      firstName,
      lastName,
      address,
      postalCode,
      InputEmail,
      city,
      job,
      InputPassword,
    };

    try {
      const response = await axios.post("http://localhost:5000/users", body);
      console.error(response);
      if (response.status === 201) {
        console.info(
          "Données enregistrées avec succès dans la base de données !"
        );
        navigate("/degustation");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="container_form">
      <h2 className="title_form">Créer un compte</h2>
      <input
        type="text"
        required
        value={firstName}
        onChange={handleChangeFirstName}
        placeholder="Prénom*"
      />
      <input
        type="text"
        required
        value={lastName}
        onChange={handleChangeLastName}
        placeholder="Nom*"
      />
      <div className="form_input_component">
        <InputEmail MaxLength={maxl} />
      </div>
      <div className="form_input_component">
        <InputPassword MaxLength={maxl} />
      </div>
      <input
        type="text"
        required
        value={address}
        onChange={handleChangeAddress}
        placeholder="Adresse*"
      />
      <div className="container_form_city">
        <input
          className="postalCode"
          type="text"
          required
          value={postalCode}
          onChange={handleChangePostalCode}
          placeholder="Code postal*"
        />
        <input
          className="city"
          type="text"
          value={city}
          onChange={handleChangeCity}
          placeholder="Ville"
        />
      </div>
      <input
        type="text"
        value={job}
        onChange={handleChangeJob}
        placeholder="Fonction"
      />
      <div className="form_navigate">
        <Button type="submit" className="primary-button" text="Valider" />
        <Link to="/login">
          <p className="form_login_link">Déjà inscrit(e) ?</p>
        </Link>
      </div>
    </form>
  );
}
export default Signup;
