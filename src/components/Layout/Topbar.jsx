import React from "react";
import "./Topbar.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="topbar-container">
      <FaFacebookF />
      <FaInstagram />
      <FaXTwitter />
      <FaSnapchatGhost />
      <FaYoutube />
    </div>
  );
};

export default Topbar;
