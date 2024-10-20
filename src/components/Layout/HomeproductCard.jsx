import React from "react";
import "./HomeproductCard.css";
import img from "../../assets/products/electronics.JPG";

const HomeproductCard = ({ image, btnname }) => {
  return (
    <div className="HomeproductCard-container">
      <div className="imgwrapper">
        <img src={image} alt="" className="imghomecard" />
        <button className="btnhomecard">
          {btnname}
        </button>
      </div>
    </div>
  );
};

export default HomeproductCard;
