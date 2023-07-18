import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

function PrivateRoutes({ children }) {
  let auth = { token: false };

  useEffect(() => {
    const fetchUserInformation = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios({
          method: "POST",
          url: `${
            import.meta.env.VITE_BACKEND_URL
          }/api/verify-token-for-protected-routes`,
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.status === 200) {
          auth = { token: true };
          console.info(auth);
          console.info(response);
        } else {
          console.error("User information not found");
        }
      } catch (error) {
        console.error("Can not get user data", error);
      }
    };
    fetchUserInformation();
  }, []);

  return auth.token ? <Navigate to="/login" /> : children;

  // return auth.token ? children : children;
}

PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoutes;
