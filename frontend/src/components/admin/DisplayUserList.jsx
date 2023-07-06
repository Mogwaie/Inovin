import PropTypes from "prop-types";
import SliderAdmin from "./SliderAdmin";

function DisplayUserList({ user }) {
  return (
    <div>
      <p>{user.firstname}</p>
      <p>{user.lastname}</p>
      <p>{user.email}</p>
      <p>10/04/1985</p>
      <p>{user.is_admin}</p>
      <SliderAdmin />
    </div>
  );
}

DisplayUserList.propTypes = {
  user: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    is_admin: PropTypes.bool.isRequired,
  }).isRequired,
};

export default DisplayUserList;
