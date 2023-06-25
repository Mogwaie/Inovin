import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import Button from "./Button";

function ModalPopup() {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(true);
    const timer = setTimeout(() => useNavigate("/"), 1000);
    return () => clearTimeout(timer);
  };

  return (
    <div className="card flex justify-content-center">
      <Button text="Test" onClick={() => handleClick()} />
      <Dialog
        header="Header"
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "960px": "10vw", "320px": "100vw" }}
      >
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Dialog>
    </div>
  );
}

export default ModalPopup;
