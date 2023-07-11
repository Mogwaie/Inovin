import React from "react";
import PropTypes from "prop-types";
import pen from "../../assets/images/pen.png";

export default function ModifButton({ onClick, id }) {
  return (
    <button
      className="modification-button"
      id={id}
      onClick={onClick}
      type="submit"
    >
      <img
        src={pen}
        alt="boutton de modification pour le titre"
        className="pen-img"
      />
    </button>
  );
}

// Definition of expected props types with PropTypes.

ModifButton.propTypes = {
  onClick: PropTypes.func,
  id: PropTypes.string,
};

// By providing the defaultProps declaration, you specify a default value for the props.

ModifButton.defaultProps = {
  onClick: () => {},
  id: undefined,
};
