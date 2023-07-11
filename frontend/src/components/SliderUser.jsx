import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ModifButton from "./admin/ModifButtonPen";

function SliderRating(props) {
  const { maxRating, onChange, tasteName, id } = props;
  const [rating, setRating] = useState(0);

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
          <ModifButton />
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
