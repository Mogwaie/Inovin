import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/MaxLengthContext";
import InputPassword from "./InputPassword";
import InputEmail from "./InputEmail";
import Button from "./Button";

function Signup() {
  const navigate = useNavigate();
  const { maxl } = useContext(UserContext);
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
  return (
    <form className="container_form">
      <h1 className="title_form">Créer un compte</h1>
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
      <InputEmail MaxLength={maxl} />
      <InputPassword MaxLength={maxl} />
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
      <Button
        className="primary-button"
        onClick={() => navigate("/login")}
        text="Valider"
      />
    </form>
  );
}
export default Signup;
