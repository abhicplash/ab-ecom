import React from "react";
import Layout from "../Layout/Layout";
import "./PNF.css";
import { Link } from "react-router-dom";

const PNF = () => {
  return (
    <Layout>
      <div className="pnfContainer">
        <h1>
          <span className="shadow-text">404</span> Page Not Found
        </h1>
        <Link to={"/"}>
          <button className="shopnowbtn-home">BACK TO HOME</button>
        </Link>
      </div>
    </Layout>
  );
};

export default PNF;
