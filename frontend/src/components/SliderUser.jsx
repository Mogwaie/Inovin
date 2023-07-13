import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import pen from "../assets/images/pen.png";

function SliderRating(props) {
  const { maxRating, onChange, tasteName } = props;
  const [rating, setRating] = useState(0);
  const [showModifImg, setShowModifImg] = useState(true);

  const location = useLocation();

  const handleSliderChange = (event) => {
    const newRating = parseInt(event.target.value, 10);
    setRating(newRating);
    onChange(newRating);
  };

  const hideModifImgUrl = ["/degustation"];

  useEffect(() => {
    if (
      hideModifImgUrl.find((urlModifImg) => urlModifImg === location.pathname)
    ) {
      setShowModifImg(false);
    } else {
      setShowModifImg(true);
    }
  }, [showModifImg]);

  return (
    <div className="SliderRating">
      <div className="taste-info">
        <div className="name-and-button-modif">
          <div className="taste-name">{tasteName}</div>
          <img
            src={pen}
            alt="pic of a pen to modify the taste name"
            className={`modification-img ${
              showModifImg ? "" : "hide-button-modif"
            }`}
          />
        </div>
        <div className="taste-rating">{rating}</div>
      </div>

      {Array.from(Array(maxRating).keys()).map((i) => (
        <div
          key={i}
          className={`my-slider__item ${i < rating ? "--selected" : ""}`}
        />
      ))}
      <input
        type="range"
        min="0"
        max={5}
        value={rating}
        onChange={handleSliderChange}
        className="my-slider"
      />
    </div>
  );
}

SliderRating.propTypes = {
  maxRating: PropTypes.number.isRequired,
  tasteName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SliderRating;
