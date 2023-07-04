import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function CardWine({ wineBottle }) {
  return (
    <div className="card-container">
      <img src={wineBottle.img_wine} alt="wine bottle to buy" />
      <div className="card-body-wine-description-and-title">
        <h2>{wineBottle.name}</h2>
        <Link to="/test">
          <p>En savoir plus</p>
        </Link>
      </div>
    </div>
  );
}

CardWine.propTypes = {
  wineBottle: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img_wine: PropTypes.string.isRequired,
  }).isRequired,
};
