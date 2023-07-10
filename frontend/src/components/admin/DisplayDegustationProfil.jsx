import PropTypes from "prop-types";

export default function DisplayDegustationProfil({ profil }) {
  return (
    <div className="display-profil-container">
      <div className="name-and-edit-by">
        <p>{profil.name}</p>
        <p>Editée par: Cédric</p>
      </div>
      <p>21/03/2023</p>
    </div>
  );
}

DisplayDegustationProfil.propTypes = {
  profil: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
