import { createContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext(null);

function UserProvider({ children }) {
  const [userId, setUserId] = useState(
    localStorage.getItem("userId")
      ? JSON.parse(localStorage.getItem("userId"))
      : null
  );
  console.info(userId);

  useEffect(() => {
    if (userId) {
      localStorage.setItem("userId", JSON.stringify(userId));
    } else {
      localStorage.removeItem("userId");
    }
  }, [userId]);

  const valueMemo = useMemo(
    () => ({
      userId,
      setUserId,
    }),
    [userId]
  );

  return (
    <UserContext.Provider value={valueMemo}>{children}</UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
