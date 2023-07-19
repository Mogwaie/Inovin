import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function CepageDosage({ cepageName, levelListCepage, setLevelListCepage, id }) {
  const [level, setLevel] = useState("");

  const handleChangeDosage = (e) => {
    e.preventDefault();
    setLevel(e.target.value);
  };

  useEffect(() => {
    let levelListCepageCopy = [...levelListCepage]; //eslint-disable-line
    for (let i = 0; i < levelListCepageCopy.length; i += 1) {
      if (levelListCepageCopy[i].cepage_id === id) {
        levelListCepageCopy[i].level = level;
      }
    }
    setLevelListCepage(levelListCepage);
  }, [level]);

  return (
    <div className="cepage-dosage-container">
      <p>{cepageName}</p>
      <div className="cepage-input">
        <input
          className="input-dosage"
          type="number"
          value={level}
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
  setLevelListCepage: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  levelListCepage: PropTypes.shape({
    level: PropTypes.number.isRequired,
    cepage_id: PropTypes.number.isRequired,
  }).isRequired,
};
