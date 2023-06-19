import React, { useState } from "react";
import PropTypes from "prop-types";

function InputEmail({ MAX_LENGTH }) {
  const [mail, setMail] = useState("");
  const handleChangeMail = (event) => {
    if (event.target.value.length <= MAX_LENGTH) {
      setMail(event.target.value);
    }
  };
  return (
    <input
      type="email"
      required
      value={mail}
      onChange={handleChangeMail}
      placeholder="Email*"
    />
  );
}

InputEmail.propTypes = {
  MAX_LENGTH: PropTypes.number.isRequired,
};
export default InputEmail;
