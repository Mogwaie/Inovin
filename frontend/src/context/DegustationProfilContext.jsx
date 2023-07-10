import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const DegustationProfilContext = createContext({});

function DegustationProfilProvider({ children }) {
  const [tasteName, setTasteName] = useState({ tasteName: "" });

  useEffect(() => {
    setTasteName(tasteName);
  }, []);

  // useMemo

  return (
    <DegustationProfilContext.Provider value={tasteName}>
      {children}
    </DegustationProfilContext.Provider>
  );
}

DegustationProfilProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DegustationProfilProvider;
