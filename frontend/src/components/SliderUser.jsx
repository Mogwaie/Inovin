import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import pen from "../assets/images/pen.png";

function SliderRating(props) {
  const { maxRating, onChange, tasteName, id } = props;
  const [rating, setRating] = useState(0);
  const [showModifImg, setShowModifImg] = useState(true);

  const location = useLocation();
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

  const handleSliderChange = (event) => {
    const newRating = parseInt(event.target.value, 10);
    setRating(newRating);
    onChange(newRating);
  };

  useEffect(() => {
    console.info("Rating :", rating);
    console.info("id :", id);
    console.info("tasteName :", tasteName);
  }, [rating]);

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
      <input
        type="range"
        min="0"
        max={maxRating}
        value={rating}
        onChange={handleSliderChange}
        className="my-slider"
      />
    </div>
  );
}

SliderRating.propTypes = {
  maxRating: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  tasteName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SliderRating;
