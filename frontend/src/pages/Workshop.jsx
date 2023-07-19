import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import wireframe from "../assets/images/imageAtelier.svg";
import CepageDosage from "../components/CepageDosage";

function Workshop() {
  const [cepageList, setCepageList] = useState([]);
  const [levelListCepage, setLevelListCepage] = useState([
    { cepage_id: 1, level: "" },
    { cepage_id: 2, level: "" },
    { cepage_id: 3, level: "" },
    { cepage_id: 4, level: "" },
  ]);

  const navigateTo = useNavigate();

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
    <form className="workshop" onSubmit={(e) => handleSubmitLevel(e)}>
      <h2 className="title-page-workshop">Atelier de création</h2>
      <div className="name-level-cepage">
        <h3>Cépage : </h3>
        <h3>Dosage : </h3>
      </div>
      <div className="cepage-level-container">
        {cepageList.map((cepage) => (
          <CepageDosage
            key={cepage.cepage_id}
            id={cepage.cepage_id}
            cepageName={cepage.name}
            levelListCepage={levelListCepage}
            setLevelListCepage={setLevelListCepage}
          />
        ))}
      </div>

      <h3 className="title-guide-ctn">Guide :</h3>
      <div className="guide-ctn">
        <img src={wireframe} alt="img-guide" className="img-guide" />

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
