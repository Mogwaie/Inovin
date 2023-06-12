import React from "react";
import PropTypes from "prop-types";
import "../main.scss";

function Button({ text, onClick, id }) {
  return (
    <button
      className="primary-button-desktop"
      id={id}
      onClick={onClick}
      type="button"
    >
      {text}
    </button>
  );
}

// Definition of expected props types with PropTypes.

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  id: PropTypes.string,
};

// By providing the defaultProps declaration, you specify a default value for the props.

Button.defaultProps = {
  onClick: () => {},
  id: undefined,
};

export default Button;
