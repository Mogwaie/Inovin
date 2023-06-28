import React, { useContext, useState } from "react";
import { MaxLengthContext } from "../context/MaxLengthContext";

function InputPassword() {
  const { maxl } = useContext(MaxLengthContext);
  const [password, setPassword] = useState("frertthyu");

  const handleChangePassword = (event) => {
    if (event.target.value.length <= maxl) {
      setPassword(event.target.value);
    }
    console.error(maxl);
  };

  return (
    <div className="input-passeword-container">
      <input
        className="input-password"
        type="password"
        required
        value={password}
        onChange={handleChangePassword}
        placeholder="Mot de passe*"
      />
    </div>
  );
}

export default InputPassword;
