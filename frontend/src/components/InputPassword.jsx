import React, { useContext } from "react";
import PropTypes from "prop-types";
import { MaxLengthContext } from "../context/MaxLengthContext";

function InputPassword({ state, setter }) {
  const { maxl } = useContext(MaxLengthContext);

  const handleChangePassword = (event) => {
    if (event.target.value.length <= maxl) {
      setter(event.target.value);
    }
  };

  return (
    <div className="input-passeword-container">
      <input
        className="input-password"
        type="password"
        required
        value={state}
        onChange={handleChangePassword}
        placeholder="Mot de passe*"
      />
    </div>
  );
}
InputPassword.propTypes = {
  state: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setter: PropTypes.func.isRequired,
};

export default InputPassword;
