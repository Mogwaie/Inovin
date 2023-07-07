import PropTypes from "prop-types";
import deleteButton from "../../assets/images/deleteButton.svg";
import modifButton from "../../assets/images/modifButton.png";

function DisplayWineList({ wine }) {
  return (
    <div className="display-wine-container-for-admin">
      <div className="wine-and-origin">
        <p>{wine.name}</p>
        <p>Origine: {wine.origin}</p>
      </div>
      <div className="date-and-icons-delete-modif">
        <p>22/03/2022</p>
        <div className="buttons-modif-and-delete">
          <img src={deleteButton} alt="button delete a user" />
          <img src={modifButton} alt="button modify a user" />
        </div>
      </div>
    </div>
  );
}

DisplayWineList.propTypes = {
  wine: PropTypes.shape({
    name: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
  }).isRequired,
};
export default DisplayWineList;
