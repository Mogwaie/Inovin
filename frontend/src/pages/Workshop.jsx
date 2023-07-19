import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import wireframe from "../assets/images/imageAtelier.svg";
import CepageDosage from "../components/CepageDosage";
import getDate from "../utils/getDate";

function Workshop() {
  const navigateTo = useNavigate();

  const [cepageList, setCepageList] = useState([]);
  const [userId, setUserId] = useState(null);
  const [levelListCepage, setLevelListCepage] = useState([
    { cepage_id: 1, level: "", user_id: userId, session_date: getDate() },
    { cepage_id: 2, level: "", user_id: userId, session_date: getDate() },
    { cepage_id: 3, level: "", user_id: userId, session_date: getDate() },
    { cepage_id: 4, level: "", user_id: userId, session_date: getDate() },
  ]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/cepages`)
      .then((response) => {
        setCepageList(response.data);
      })
      .catch((error) => {
        console.error(error);
        navigateTo("/page-500");
      });

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
          setUserId(userInfo.userId);
        } else {
          console.error("User information not found");
        }
      } catch (error) {
        console.error("Can not get user data", error);
        navigateTo("/page-500");
      }
    };
    fetchUserInformation();
  }, []);

  const handleSubmitLevel = async (e) => {
    e.preventDefault();

    for (let i = 0; i < levelListCepage.length; i += 1) {
      if (!(levelListCepage[i].level === "")) {
        const body = levelListCepage[i];
        console.info(body);
        try {
          const response = axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/api/recipes`,
            body
          );
          if (response.status === 201) {
            // navigateTo("/reviews");
            console.info("well done");
          }
        } catch (error) {
          console.error(error);
        }
      }
    }
  };

  return (
    <form className="Workshop" onSubmit={(e) => handleSubmitLevel(e)}>
      <h1 className="title-page">Atelier</h1>
      <h1 className="title-page">de création</h1>

      {cepageList.map((cepage) => (
        <div>
          <CepageDosage
            key={cepage.cepage_id}
            id={cepage.cepage_id}
            cepageName={cepage.name}
            levelListCepage={levelListCepage}
            setLevelListCepage={setLevelListCepage}
          />
        </div>
      ))}

      <div className="title-guide-ctn">Guide :</div>
      <div className="guide-ctn">
        <div className="img-guide-ctn">
          <img src={wireframe} alt="img-guide" className="img-guide" />
          <img src={wireframe} alt="img-guide" className="img-guide" />
          <img src={wireframe} alt="img-guide" className="img-guide" />
        </div>
        <div className="content-guide-ctn">
          <ul>
            <li>
              Et consequat anim officia fugiat dolor aute excepteur deserunt
              sint aute anim aliqua est.
            </li>
            <li>
              Et consequat anim officia fugiat dolor aute excepteur deserunt
              sint aute anim aliqua est.
            </li>

            <li>
              Et consequat anim officia fugiat dolor aute excepteur deserunt
              sint aute anim aliqua est.
            </li>
            <li>
              Et consequat anim officia fugiat dolor aute excepteur deserunt
              sint aute anim aliqua est.
            </li>
            <li>
              Et consequat anim officia fugiat dolor aute excepteur deserunt
              sint aute anim aliqua est.
            </li>
          </ul>
        </div>
      </div>

      <div className="btn-workshop">
        <Button id="btn-to-go-review" text="Enregistrer" type="submit" />
      </div>
    </form>
  );
}

export default Workshop;
