import React from "react";
import "./HomeBanner.css";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div className="banner-container">
      <div className="banner-texts">
        <h1 className="homebanner-head">new arrivals</h1>
        <Link to={"/product"}>
          <button className="shopbtn">shop now</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeBanner;
