import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import userRoles from "./constantRoles";

function PrivateRoutes({ expectedRoles, children }) {
  const isAuthorized = true;
  const areRolesRequired = !!expectedRoles?.length;
  const roles = [userRoles.editor];

  const rolesMatch = areRolesRequired
    ? expectedRoles.some((r) => roles.indexOf(r) >= 0)
    : true;

  if (!isAuthorized || !rolesMatch) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired,
  expectedRoles: PropTypes.node.isRequired,
};

export default PrivateRoutes;
