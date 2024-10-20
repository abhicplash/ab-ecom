import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <h3 className="head-foot">Get in touch</h3>
        <ul className="footer-list">
          <li>
            Any questions? Let us know in store at 8th floor, 379 Hudson St, New
            York, NY 10018 <br />
            <div className="footer-con-container">
              <FaFacebookF />
              <FaInstagram />
              <FaXTwitter />
              <FaSnapchatGhost />
              <FaYoutube />
            </div>
          </li>
        </ul>
      </div>
      <div className="footer-middle">
        <h3 className="head-foot">Categories</h3>
        <ul className="footer-list">
          <li>home</li>
          <li>home</li>
          <li>home</li>
          <li>home</li>
          <li>home</li>
        </ul>
      </div>
      <div className="footer-right">
        <h3 className="head-foot">Links</h3>
        <ul className="footer-list">
          <li>home</li>
          <li>home</li>
          <li>home</li>
          <li>home</li>
          <li>home</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
