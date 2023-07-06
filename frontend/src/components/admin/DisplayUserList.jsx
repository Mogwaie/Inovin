import PropTypes from "prop-types";
import SliderAdmin from "./SliderAdmin";
import deleteButton from "../../assets/images/deleteButton.svg";
import modifButton from "../../assets/images/modifButton.png";

function DisplayUserList({ user }) {
  return (
    <div className="user-display-container">
      <div className="email-name-lastname-user">
        <div className="name-lastname-user-admin">
          <p>{user.firstname}</p>
          <p>{user.lastname}</p>
        </div>
        <p className="email-container">{user.email}</p>
      </div>
      <div className="icons-and-admin">
        <div className="member-admin-switch">
          <p>Admin</p>
          <SliderAdmin />
        </div>
        <div className="buttons-modif-and-delete">
          <img src={deleteButton} alt="button delete a user" />
          <img src={modifButton} alt="button modify a user" />
        </div>
      </div>
    </div>
  );
}

DisplayUserList.propTypes = {
  user: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default DisplayUserList;
