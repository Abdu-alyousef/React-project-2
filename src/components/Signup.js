import React from "react";
import { useState } from "react";
import instaLogo from "../imgs/logo.png";
import Modal from "react-modal";
import "./signup.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function Signup() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="sign__up">
      <span>Don't have an account? </span>
      <button onClick={openModal} href="/">
        Signup
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="signup__container">
          <img src={instaLogo} alt="instagram logo" />
          <input type="text" placeholder="username" />
          <input type="text" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Signup</button>
        </div>
      </Modal>
    </div>
  );
}

export default Signup;
