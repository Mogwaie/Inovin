import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import InputForm from "../components/InputForm";
import Button from "../components/Button";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("toto");
  const [lastName, setLastName] = useState("tata");
  const [address, setAddress] = useState("ffffff");
  const [postalCode, setPostalCode] = useState(35695);
  const [city, setCity] = useState("fffffgh");
  const [job, setJob] = useState("hhhhhhhh");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        toast("Bravo ! Votre compte a bien été créé !", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate("/login");
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
        state={firstName}
        setter={setFirstName}
        placeholder="Prénom*"
      />
      <InputForm
        type="text"
        state={lastName}
        setter={setLastName}
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
        state={address}
        setter={setAddress}
        placeholder="Adresse*"
      />
      <div className="container_form_city">
        <div>
          <InputForm
            className="postalCode"
            type="text"
            required
            state={postalCode}
            setter={setPostalCode}
            placeholder="Code postal*"
          />
        </div>
        <div>
          <InputForm
            className="city"
            type="text"
            state={city}
            setter={setCity}
            placeholder="Ville"
          />
        </div>
      </div>
      <InputForm
        type="text"
        state={job}
        setter={setJob}
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
