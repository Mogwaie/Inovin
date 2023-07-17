import { useState } from "react";
import PropTypes from "prop-types";

function SliderRating(props) {
  const { onChange, tasteName } = props;
  const [rating, setRating] = useState(0);

  const handleSliderChange = (event) => {
    const newRating = parseInt(event.target.value, 10);
    setRating(newRating);
    onChange(newRating);
  };

  return (
    <div className="sliderRating">
      <div className="taste-info">
        <div className="taste-name">{tasteName}</div>
        <div className="taste-rating">{rating}</div>
      </div>

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
  tasteName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SliderRating;
