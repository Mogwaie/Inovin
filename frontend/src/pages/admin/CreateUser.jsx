import React, { useState } from "react";
import SliderAdmin from "../../components/admin/SliderAdmin";
import InputForm from "../../components/InputForm";
import Button from "../../components/Button";

export default function CreateUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState();
  const [city, setCity] = useState("");
  const [job, setJob] = useState("");

  return (
    <div className="create-user-container">
      <h2>Créer un compte</h2>
      <div className="slider-admin-user">
        <p>Admin</p>
        <SliderAdmin />
        <p>Membre</p>
      </div>
      <form>
        <InputForm
          state={firstName}
          setter={setFirstName}
          type="text"
          placeholder="Nom *"
        />
        <InputForm
          state={lastName}
          setter={setLastName}
          type="text"
          placeholder="Prénom *"
        />
        <InputForm
          state={email}
          setter={setEmail}
          type="email"
          placeholder="email*"
        />
        <InputForm
          type="text"
          required
          state={address}
          setter={setAddress}
          placeholder="Adresse*"
        />
        <div className="container_form_city">
          <InputForm
            className="postalCode"
            type="text"
            required
            state={postalCode}
            setter={setPostalCode}
            placeholder="Code postal*"
          />

          <InputForm
            className="city"
            type="text"
            state={city}
            setter={setCity}
            placeholder="Ville"
          />
        </div>
        <InputForm
          type="text"
          state={job}
          setter={setJob}
          placeholder="Fonction"
        />
      </form>

      <Button type="submit" className="primary-button" text="Valider" />
    </div>
  );
}
