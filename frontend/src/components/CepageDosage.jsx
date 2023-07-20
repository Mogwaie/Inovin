import React from "react";
import PropTypes from "prop-types";

function CepageDosage({ cepageName, setDosage, dosage }) {
  const handleChangeDosage = (e) => {
    e.preventDefault();
    setDosage(e.target.value);
  };

  return (
    <div className="cepage-dosage-container">
      <p>{cepageName}</p>
      <div className="cepage-input">
        <input
          className="input-dosage"
          type="number"
          value={dosage}
          onChange={handleChangeDosage}
          placeholder="0"
        />
        <p>ml</p>
      </div>
    </div>
  );
}
export default CepageDosage;

CepageDosage.propTypes = {
  cepageName: PropTypes.string.isRequired,
  setDosage: PropTypes.string.isRequired,
  dosage: PropTypes.number.isRequired,
};
