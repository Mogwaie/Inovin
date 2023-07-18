import { useState } from "react";
// import axios from "axios";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import userRoles from "./constantRoles";

function PrivateRoutes({ expectedRoles, children }) {
  const [currentUser, setCurrentUser] = useState(undefined);

  // useEffect(() => {
  // const token = localStorage.getItem("token");
  // try {
  //   const response = await axios.post(
  //     `${import.meta.env.VITE_BACKEND_URL}/api/users`,
  //     body
  //   );

  //   if (response.status === 201) {
  //     console.info(
  //       "Données enregistrées avec succès dans la base de données !"
  //     );
  //   }
  // } catch (err) {
  //   console.error(err);
  // }
  // }, []);

  setTimeout(() => {
    if (localStorage.getItem("token")) {
      setCurrentUser({ id: "1", name: "foo" });
    } else {
      setCurrentUser(null);
    }
  }, 2000);

  if (currentUser === undefined) {
    return null;
  }

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  const isAuthorized = true;
  const areRolesRequired = !!expectedRoles?.length;
  const roles = [userRoles.user];

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
