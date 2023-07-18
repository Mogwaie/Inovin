import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

function PrivateRoutes({ expectedRoles, children }) {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [role, setRole] = useState(undefined);

  useEffect(() => {
    const fetchUserInformation = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios({
          method: "POST",
          url: `${import.meta.env.VITE_BACKEND_URL}/api/userinformation`,
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.status === 200) {
          const userInfo = response.data;
          setRole(userInfo.role);
        } else {
          console.error("User information not found");
        }
      } catch (error) {
        console.error("Can not get user data", error);
      }
    };
    fetchUserInformation();
  }, []);

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
  const roles = [role];

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
