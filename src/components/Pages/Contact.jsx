import React, { useState } from "react";
import Layout from "../Layout/Layout";
import "./Contact.css";
import { FaAddressCard, FaEnvelope } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    subject: "",
    contactNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Construct the message
    const message = `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nContact Number: ${formData.contactNumber}\nMessage: ${formData.message}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp API URL
    // https://wa.me/+919562465095/?text
    const whatsappUrl = `https://wa.me/+919562465095/?text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");

    // Clear the form after sending
    setFormData({
      name: "",
      company: "",
      email: "",
      subject: "",
      contactNumber: "",
      message: "",
    });
  };

  return (
    <Layout>
      <div className="pagetop">
        <h1>Contact us</h1>
      </div>
      <div className="contact-container">
        {/* <div className="PageTop-wrapper">
          <h1>Contact us</h1>
          <p>
            Start a conversation with us to build a good relationship and
            business together.
          </p>
        </div> */}
        <div className="contact-main-wrapper">
          <div className="contact-information-wrapper">
            <div className="contact-address-card">
              <div className="contactIcon">
                <FaEnvelope />
              </div>
              <span className="contact-info-head">Mail To Us</span>
              <span className="contact-info-para">info@dimark.ae</span>
            </div>
            <hr />
            <div className="contact-address-card">
              <div className="contactIcon">
                <MdPhoneInTalk />
              </div>
              <span className="contact-info-head">Feel Free To Call</span>
              <span className="contact-info-para">+971 54 279 1548</span>
            </div>
            <hr />
            <div className="contact-address-card">
              <div className="contactIcon">
                <FaAddressCard />
              </div>
              <span className="contact-info-head">Address</span>
              <span className="contact-info-para">
                379 Hudson St, New York, NY 10018
              </span>
            </div>
          </div>
          <div className="contact-details-container">
            <form onSubmit={handleSubmit}>
              <h2>Get in Touch</h2>
              <div className="contactform-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <div className="contactform-row">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <input
                type="text"
                name="contactNumber"
                placeholder="Contact Number"
                className="contact-number"
                value={formData.contactNumber}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button className="shopnowbtn-home" type="submit">
                {/* <span aria-hidden="true" className="circle"> */}
                  {/* <span className="icon arrow" /> */}
                {/* </span> */}
                Send Message
                {/* <span className="button-text">Send message</span> */}
              </button>
            </form>
          </div>
        </div>
        <iframe
          className="mapContact"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3608.129695322447!2d55.380971!3d25.2662222!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fc5663586722f51%3A0x8c6df0cef1bc2813!2sDimark%20Marketing%20Management%20LLC!5e0!3m2!1sen!2sin!4v1729964610097!5m2!1sen!2sin"
          title="mapContact"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </Layout>
  );
};

export default Contact;
