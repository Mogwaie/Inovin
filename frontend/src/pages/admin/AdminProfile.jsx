import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import profileBottles from "../../assets/images/profileBottles.png";
import profilePicture from "../../assets/images/profilePicture.png";

export default function ProfileAdnim() {
  const navigateTo = useNavigate();

  const { id } = useParams();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [fonction, setFonction] = useState("");
  const [recipeUser, setRecipeUser] = useState([]);
  const [finalListRecipeUser, setFinalListRecipeUser] = useState([]);

  useEffect(() => {
    const test = async () => {
      let sessionDate = await recipeUser[0].session_date;
      const myFinalArray = [];
      let myArray = [];
      recipeUser.forEach((recipe) => {
        if (recipe.session_date === sessionDate) {
          myArray.push(recipe);
        } else {
          myFinalArray.push(myArray);
          myArray = [];
          sessionDate = recipe.session_date;
          myArray.push(recipe);
        }
      });
      myFinalArray.push(myArray);
      setFinalListRecipeUser(myFinalArray);
    };
    test();
  }, [recipeUser]);

  useEffect(() => {
    const fetchUserInformation = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `${import.meta.env.VITE_BACKEND_URL}/api/users/${id}`,
        });
        if (response.status === 200) {
          const userInfo = response.data;
          setFirstName(userInfo.firstname);
          setLastName(userInfo.lastname);
          setEmail(userInfo.email);
          setAdress(userInfo.address);
          setZip(userInfo.zip_code);
          setCity(userInfo.city);
          setFonction(userInfo.job);
        } else {
          console.error("User information not found");
        }
      } catch (error) {
        console.error("Can not get user data", error);
      }
    };
    fetchUserInformation();

    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/recipes-by-user/${id}`)
      .then((response) => {
        setRecipeUser(response.data);
      })
      .catch((error) => {
        console.error(error);
        navigateTo("/page-500");
      });
  }, [id]);

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
        navigateTo("/admin/user-list");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnClickSupp = async (e) => {
    e.preventDefault();
    try {
      const reponse = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/userinformation/${id}`
      );
      if (reponse.status === 204) {
        navigateTo("/admin/user-list");
      }
    } catch (error) {
      console.error(error);
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
          <div className="buttons-delete-and-back">
            <button type="submit" className="primary-button ">
              Mettre à jour
            </button>

            <button
              type="button"
              onClick={handleOnClickSupp}
              className="primary-button "
            >
              Supprimer
            </button>
          </div>
        </form>
        <div className="recipe-container">
          <h3>Recettes :</h3>
          <ul className="recipe-ctn">
            {finalListRecipeUser !== null ? (
              finalListRecipeUser.map((recipesUser, idRecipe) => {
                return (
                  <ul className="recipe-by-session" key={[idRecipe]}>
                    <p className="recipe-p">Recette {idRecipe + 1} :</p>;
                    {recipesUser.map((recipes, idRecipeUser) => {
                      return (
                        <li
                          key={[idRecipeUser]}
                          className="recipe-by-cepage-and-level"
                        >
                          {recipes.cepage_name} : {recipes.cepage_level} ml
                        </li>
                      );
                    })}
                  </ul>
                );
              })
            ) : (
              <>Loading</>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
