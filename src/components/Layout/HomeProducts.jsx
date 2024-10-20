import React from "react";
import "./HomeProducts.css";
import HomeproductCard from "./HomeproductCard";
import { homeproductData } from "../../utils/homeproductData";
import { Link } from "react-router-dom";

const HomeProducts = () => {
  return (
    <div className="hm-wrapper">
      <div className="HomeProducts-container">
        {homeproductData.map((list, index) =>
          <HomeproductCard key={index} image={list.img} btnname={list.name} />
        )}
      </div>
      <Link to={"/product"}>
        <button className="shopnowbtn-home">SHOP</button>
      </Link>
    </div>
  );
};

export default HomeProducts;
