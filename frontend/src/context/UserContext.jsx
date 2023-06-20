import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext({});

function UserProvider({ children }) {
  const [user, setUser] = useState("");
  const MaxLenght = 5;

  useEffect(() => {
    setUser(MaxLenght);
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
