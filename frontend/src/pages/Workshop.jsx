import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import wireframe from "../assets/images/imageAtelier.svg";
import CepageDosage from "../components/CepageDosage";

function Workshop() {
  const [dosage, setDosage] = useState(0);
  const [cepageList, setCepageList] = useState([]);
  const navigateTo = useNavigate();
  const goToReview = async () => {
    await navigateTo("/reviews");
  };

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

  return (
    <div className="Workshop">
      <h1 className="title-page">Atelier</h1>
      <h1 className="title-page">de création</h1>

      {cepageList.map((cepage) => (
        <div>
          <CepageDosage
            cepageName={cepage.name}
            dosage={dosage}
            setDosage={setDosage}
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
        <Button id="btn-to-go-review" text="Enregistrer" onClick={goToReview} />
      </div>
    </div>
  );
}

export default Workshop;
