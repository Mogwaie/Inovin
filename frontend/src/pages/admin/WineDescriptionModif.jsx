import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ModifButton from "../../components/admin/ModifButtonPen";

export default function WineDescriptionModif() {
  const { id } = useParams();

  const [selectedWine, setSelectedWine] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:4242/api/wines/${id}`).then((response) => {
      setSelectedWine(response.data);
    });
  }, [id]);

  return (
    <div className="wine-desciption-user-container">
      <div className="modif-title-wine">
        <ModifButton />
        <h2>{selectedWine.name}</h2>
      </div>
      <div className="pict-wine-and-description-user">
        <div className="button-modif-and-pic-wine-bottle">
          <ModifButton />
          <img
            src={selectedWine.img_wine}
            alt="wine bottle to buy"
            className="wine-bottle-picture"
          />
        </div>
        <div className="button-modif-and-wine-description">
          <ModifButton />
          <div className="description-line-container">
            <p>{selectedWine.description}</p>
            <div className="vertical-line-next-description-wine" />
          </div>
        </div>
      </div>
      <Link to="/wine-list">
        <button type="button" className="primary-button ">
          Revenir à la liste
        </button>
      </Link>
    </div>
  );
}
