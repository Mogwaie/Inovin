import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import profileBottles from "../assets/images/profileBottles.png";
import profilePicture from "../assets/images/profilePicture.png";

export default function Profile() {
  const navigateTo = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [fonction, setFonction] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    const fetchUserInformation = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios({
          method: "POST",
          url: `${import.meta.env.VITE_BACKEND_URL}/api/userinformation`,
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.status === 200) {
          const userInfo = response.data;
          setFirstName(userInfo.name);
          setLastName(userInfo.surname);
          setEmail(userInfo.email);
          setAdress(userInfo.adress);
          setZip(userInfo.zip);
          setCity(userInfo.city);
          setFonction(userInfo.fonction);
          setId(userInfo.userId);
        } else {
          console.error("User information not found");
        }
      } catch (error) {
        console.error("Can not get user data", error);
      }
    };
    fetchUserInformation();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/${id}`
      ); // Remplacez l'URL par votre endpoint GET

      const userData = response.data;

      setFirstName(userData.firstname);
      setLastName(userData.lastname);
      setEmail(userData.email);
      // Mettez à jour avec d'autres champs du formulaire si nécessaire
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
      // Gérer l'erreur de récupération des données ici
    }
  };

  useEffect(() => {
    fetchData(); // Appel à la fonction fetchData dès l'ouverture de la page
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      firstname: firstName,
      lastname: lastName,
      address: adress,
      zip_code: zip,
      email,
      city,
      job: fonction,
    };
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/userinformation/${id}`,
        body
      );
      if (response.status === 200) {
        console.info("yessssssss");
        toast("Mise à jour ok", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigateTo("/degustation");
      }
    } catch (error) {
      console.error(error);
      navigateTo("/page-500");
    }
  };

  return (
    <div className="profilePageDiv">
      <img className="profileBottles" src={profileBottles} alt="Bottles" />
      <div className="profilePartTwo">
        <img className="profileImage" src={profilePicture} alt="Profile" />
        <h2>Profil</h2>
        <form onSubmit={(e) => handleSubmit(e)} className="profilePageForm">
          <div className="nameDiv">
            <input
              className="reviewsInput nameInput"
              type="text"
              placeholder="Nom *"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              className="reviewsInput"
              type="text"
              placeholder="Prénom *"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <input
            className="longInput"
            type="text"
            placeholder="Email *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="longInput"
            type="text"
            placeholder="Adresse *"
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
          />
          <div className="cityDiv">
            <input
              className="reviewsInput nameInput"
              type="text"
              placeholder="Code postal *"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
            <input
              className="reviewsInput"
              type="text"
              placeholder="Ville *"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <input
            className="longInput"
            type="text"
            placeholder="Fonction *"
            value={fonction}
            onChange={(e) => setFonction(e.target.value)}
          />
          <button
            className="primary-button"
            id="reviewsPageButton"
            type="submit"
          >
            Mettre à jour
          </button>
        </form>
      </div>
    </div>
  );
}
