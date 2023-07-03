import React, { useContext } from "react";
import PropTypes from "prop-types";
import { MaxLengthContext } from "../context/MaxLengthContext";

function InputEmail({ state, setter, type }) {
  const { maxl } = useContext(MaxLengthContext);
  const handleChangeMail = (event) => {
    if (event.target.value.length <= maxl) {
      setter(event.target.value);
    }
  };
  return (
    <div className="input-email-container">
      <input
        className="input-email"
        type={type}
        required
        value={state}
        onChange={handleChangeMail}
        placeholder="Email*"
      />
    </div>
  );
}
InputEmail.propTypes = {
  state: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setter: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
export default InputEmail;
