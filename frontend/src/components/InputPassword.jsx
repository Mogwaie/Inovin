import React, { useState } from "react";
import PropTypes from "prop-types";

function InputPassword({ MAX_LENGTH }) {
  const [password, setPassword] = useState("");

  const handleChangePassword = (event) => {
    if (event.target.value.length <= MAX_LENGTH) {
      setPassword(event.target.value);
    }
    console.error(MAX_LENGTH);
  };

  return (
    <input
      type="password"
      required
      value={password}
      onChange={handleChangePassword}
      placeholder="Mot de passe*"
    />
  );
}

InputPassword.propTypes = {
  MAX_LENGTH: PropTypes.number.isRequired,
};
export default InputPassword;
