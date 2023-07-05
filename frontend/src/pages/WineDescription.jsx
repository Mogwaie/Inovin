import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function WineDescription() {
  const { id } = useParams();
  const [selectedWine, setSelectedWine] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:4242/api/wines/${id}`).then((response) => {
      setSelectedWine(response.data);
    });
  }, [id]);

  return (
    <div className="wine-desciption-user-container">
      <h2>{selectedWine.name}</h2>
      <div className="pict-wine-and-description-user">
        <img src={selectedWine.img_wine} alt="wine bottle to buy" />
        <div className="description-line-container">
          <p>{selectedWine.description}</p>
          <div className="vertical-line-next-description-wine" />
        </div>
      </div>
      <Link to="/wine-selection">
        <button type="button" className="primary-button ">
          Revenir à la liste
        </button>
      </Link>
    </div>
  );
}

export default WineDescription;
