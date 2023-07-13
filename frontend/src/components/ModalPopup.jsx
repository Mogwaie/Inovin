import React, { useState } from "react";
import PropTypes from "prop-types";

function ModalPopup({ message, onClose }) {
  const [isOpen, setIsOpen] = useState(true);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [showButtons, setShowButtons] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  const handleCancel = () => {
    handleClose();
  };

  const handleConfirmation = () => {
    setShowButtons(false);
    setTimeout(() => {
      setConfirmationMessage("Confirmation message from backend");
      setTimeout(handleClose, 3000); // Close the popup after 3 seconds
    }, 1500); // Simulating backend response delay
    // You can make an actual API call here to fetch the confirmation message
    // and handle the response accordingly
  };

  return (
    <div className={`popup ${isOpen ? "open" : ""}`}>
      <div className="popup-content">
        <p className="message">{message}</p>
        {showButtons && (
          <>
            <button
              className="primary-button"
              type="submit"
              onClick={handleConfirmation}
            >
              Oui
            </button>
            <button
              className="primary-button"
              type="submit"
              onClick={handleCancel}
            >
              Non
            </button>
          </>
        )}
        <p className="message">{confirmationMessage}</p>
      </div>
    </div>
  );
}

ModalPopup.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalPopup;
