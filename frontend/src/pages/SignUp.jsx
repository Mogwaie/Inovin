import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { MaxLengthContext } from "../context/MaxLengthContext";
// import InputPassword from "../components/InputPassword";
import InputForm from "../components/InputForm";
import Button from "../components/Button";

function Signup() {
  const navigate = useNavigate();
  const { maxl } = useContext(MaxLengthContext);

  const [firstName, setFirstName] = useState("toto");
  const [lastName, setLastName] = useState("tata");
  const [address, setAddress] = useState("ffffff");
  const [postalCode, setPostalCode] = useState(35695);
  const [city, setCity] = useState("fffffgh");
  const [job, setJob] = useState("hhhhhhhh");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      firstname: firstName,
      lastname: lastName,
      address,
      zip_code: postalCode,
      email,
      city,
      job,
      password,
    };

    console.info(body);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/users`,
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
    <form onSubmit={(e) => handleSubmit(e)} className="container_form">
      <h2 className="title_form">Créer un compte</h2>

      <InputForm
        type="text"
        required
        value={firstName}
        onChange={handleChangeFirstName}
        placeholder="Prénom*"
      />
      <InputForm
        type="text"
        required
        value={lastName}
        onChange={handleChangeLastName}
        placeholder="Nom*"
      />

      <InputForm
        state={email}
        setter={setEmail}
        type="email"
        placeholder="email*"
      />

      <InputForm
        state={password}
        setter={setPassword}
        type="password"
        placeholder="Mot de passe*"
      />

      <InputForm
        type="text"
        required
        value={address}
        onChange={handleChangeAddress}
        placeholder="Adresse*"
      />
      <div className="container_form_city">
        <div>
          <InputForm
            className="postalCode"
            type="text"
            required
            value={postalCode}
            onChange={handleChangePostalCode}
            placeholder="Code postal*"
          />
        </div>
        <div>
          <InputForm
            className="city"
            type="text"
            value={city}
            onChange={handleChangeCity}
            placeholder="Ville"
          />
        </div>
      </div>
      <InputForm
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
