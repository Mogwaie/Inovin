import { useState } from "react";
import InputPassword from "./InputPassword";
import InputEmail from "./InputEmail";
import Button from "./Button";

function Signup() {
  const MAX_LENGTH = 250; // Feel free to change the value
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [job, setJob] = useState("");
  const handleChangeFirstName = (event) => {
    if (event.target.value.length <= MAX_LENGTH) {
      setFirstName(event.target.value);
    }
  };
  const handleChangeLastName = (event) => {
    if (event.target.value.length <= MAX_LENGTH) {
      setLastName(event.target.value);
    }
  };

  const handleChangeAddress = (event) => {
    if (event.target.value.length <= MAX_LENGTH) {
      setAddress(event.target.value);
    }
  };
  const handleChangePostalCode = (event) => {
    if (event.target.value.length <= MAX_LENGTH) {
      setPostalCode(event.target.value);
    }
  };
  const handleChangeCity = (event) => {
    if (event.target.value.length <= MAX_LENGTH) {
      setCity(event.target.value);
    }
  };
  const handleChangeJob = (event) => {
    if (event.target.value.length <= MAX_LENGTH) {
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
      <InputEmail MAX_LENGTH={MAX_LENGTH} />
      <InputPassword MAX_LENGTH={MAX_LENGTH} />
      <input
        type="text"
        required
        value={address}
        onChange={handleChangeAddress}
        placeholder="Adresse*"
      />
      <div className="container_form_city">
        <input
          type="text"
          required
          value={postalCode}
          onChange={handleChangePostalCode}
          placeholder="Code postal*"
        />
        <input
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
      <Button text="Valider" />
    </form>
  );
}
export default Signup;
