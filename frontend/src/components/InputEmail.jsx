import React, { useContext, useState } from "react";
import { MaxLengthContext } from "../context/MaxLengthContext";

function InputEmail() {
  const { maxl } = useContext(MaxLengthContext);
  const [mail, setMail] = useState("");
  const handleChangeMail = (event) => {
    if (event.target.value.length <= maxl) {
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

export default InputEmail;
