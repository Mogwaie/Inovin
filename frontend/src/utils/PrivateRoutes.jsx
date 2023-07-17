import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

function PrivateRoutes({ children }) {
  const auth = { token: false };
  return auth.token ? children : <Navigate to="/login" />;
}

PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoutes;
