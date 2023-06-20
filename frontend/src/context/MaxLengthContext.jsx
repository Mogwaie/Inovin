import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext({});

function MaxLengthProvider({ children }) {
  const [user, setUser] = useState({});
  const MaxL = { maxl: 35 };

  useEffect(() => {
    setUser(MaxL);
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

MaxLengthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MaxLengthProvider;
