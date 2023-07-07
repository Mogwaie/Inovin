import PropTypes from "prop-types";

function DisplayWineList({ wine }) {
  return (
    <div className="display-wine-container-for-admin">
      <div className="wine-and-origin">
        <p>{wine.name}</p>
        <p>Origine: {wine.origin}</p>
      </div>
      <p>22/03/2022</p>
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
