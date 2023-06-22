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
    <div className="input-email-container">
      <input
        className="input-email"
        type="email"
        required
        value={mail}
        onChange={handleChangeMail}
        placeholder="Email*"
      />
    </div>
  );
}

InputEmail.propTypes = {
  MAX_LENGTH: PropTypes.number.isRequired,
};
export default InputEmail;
