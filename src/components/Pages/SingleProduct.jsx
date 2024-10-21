import React from "react";
import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";
import useProducts from "../../utils/useProducts";
import "./SingleProduct.css";

const SingleProduct = () => {
  const { id } = useParams();
  const select = useProducts(id);
  return (
    <Layout>
      {console.log(select)}
      <div className="SingleProduct-dontainer">
        <div className="product-wrapper">
          <div className="productImage-wrapper">
            <img src={select.image} alt="" className="productImage" />
          </div>
          <div className="productDetails-wrapper">
            <h1 className="title">
              {select.title}
            </h1>
            <h5 className="category">
              {select.category}
            </h5>
            <h4 className="description">
              {select.description}
            </h4>
            <button className="AddtoCart">Add to cart</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleProduct;
